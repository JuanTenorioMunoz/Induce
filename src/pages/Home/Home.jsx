import React, { useEffect, useState } from "react";
import ChatWidget from "../../components/ChatAI/ChatWidget";
import JobCard from "../../components/JobCard/JobCard";
import { fetchAllFromTable } from "../../utils/supabaseUtils";
import { parseJSON } from "../../utils/utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import JobInfo from "../../components/JobInfo/JobInfo";
import JobDetailPanel from "../../components/JobDetailPanel/JobDetailPanel";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

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
    <div id="root" className="min-h-screen">
      <Sidebar />

      {/* Main column */}
      <main className="flex-1 min-w-0 px-6 py-6 overflow-y-auto">

        <div className="flex flex-col items-center gap-4">
          {courses.map((course, index) => (
            <JobCard
              key={index}
              title={course.title}
              company={course.company}
              level={course.level}
              salary={course.salary}
              description={course.description}
              tags={parseJSON(course.skills)}
              timeAgo={course.timeAgo}
              recommended={course.recommended}
              match={course.match}
              onClick={() =>
                setSelectedJob({
                  ...course,
                  tags: parseJSON(course.skills) || [],
                })
              }
            />
          ))}
        </div>
      </main>

      {/* RIGHT PANEL */}
      <aside className="flex-none w-[30vw] min-w-0 border-l border-gray-200 overflow-y-auto">
        {selectedJob ? (
          <JobDetailPanel job={selectedJob} onClose={() => setSelectedJob(null)} />
        ) : (
          <ProfileSummary />
        )}
      </aside>

      <ChatWidget />
    </div>
  );
};

export default Home;
