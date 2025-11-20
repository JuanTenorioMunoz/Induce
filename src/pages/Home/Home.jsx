import React, { useEffect, useState } from "react";
import ChatWidget from "../../components/ChatAI/ChatWidget";
import JobCard from "../../components/JobCard/JobCard";
import { fetchAllFromTable } from "../../utils/supabaseUtils";
import { parseJSON } from "../../utils/utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";

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
      <div className="flex flex-row">
        <Sidebar />

        <div className="flex flex-col w-full p-8 overflow-y-auto scroll-hide bg-[var(--color-fondo_blanco)] items-center">
          
          <div
            className="rounded-2xl shadow-md p-6 mb-6 w-full max-w-[675px]"
            style={{ backgroundColor: "var(--color-violet_blue)", color: "var(--color-fullwhite)" }}
          >
            <h2 className="font-outfit text-2xl font-semibold mb-1">¡Hola, Ana!</h2>
            <p className="font-primary text-base opacity-95">
              Descubre las oportunidades que hemos encontrado para ti.
            </p>
          </div>

          <div className="flex justify-between items-center w-full max-w-[675px] mb-3">
            <h3
              className="font-outfit text-lg font-semibold"
              style={{ color: "var(--color-texto-titulos_y_texto_destacado)" }}
            >
              Recomendaciones en empleo
            </h3>
            <button
              className="font-primary text-sm font-semibold hover:underline"
              style={{ color: "var(--color-success)" }}
            >
              Ver más
            </button>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
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
              />
            ))}
          </div>
        </div>
      </div>

      <ProfileSummary />
      <ChatWidget />
    </>
  );
};

export default Home;
