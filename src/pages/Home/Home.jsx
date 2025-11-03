import React, { useEffect, useState } from "react";
import ChatWidget from "../../components/ChatAI/ChatWidget";
import JobCard from "../../components/JobCard/JobCard";
import { fetchAllFromTable } from "../../utils/supabaseUtils";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchAllFromTable("courses");
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    loadCourses();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-6">
        {courses.map((course, index) => (
          <JobCard
            key={index}
            title={course.title}
            company={course.company}
            level={course.level}
            salary={course.salary}
            description={course.description}
            tags={course.tags ? course.tags.split(",") : []}
            timeAgo={course.timeAgo}
            recommended={course.recommended}
            match={course.match}
          />
        ))}
      </div>

      <ChatWidget />
    </>
  );
};

export default Home;
