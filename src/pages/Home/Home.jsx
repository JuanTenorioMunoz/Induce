import React, { useEffect, useState } from "react";
import ChatWidget from "../../components/ChatAI/ChatWidget";
import JobCard from "../../components/JobCard/JobCard";
import { fetchAllFromTable } from "../../utils/supabaseUtils";
import { parseJSON } from "../../utils/utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import JobInfo from "../../components/JobInfo/JobInfo";
import JobDetailPanel from "../../components/JobDetailPanel/JobDetailPanel";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";



import JobApplicationModal from "../../components/ApplicationModal/ApplicationModal";
import ApplicationModal from "../../components/ApplicationModal/ApplicationModal";

const Home = () => {

  const [courses, setCourses] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  // 👇 NUEVO: estado para abrir/cerrar el modal
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

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
    <div id="root" className="flex min-h-screen">

      <Sidebar />

      {/* MODAL REAL aquí */}
      <ApplicationModal
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
      />

      {/* MAIN */}
      <main className="flex-1 min-w-0 px-6 py-6 overflow-y-auto">
        <WelcomeBanner name="Ana" />

        <h1 className="font-outfit text-[var(--color-texto-titulos_y_destacado)] text-3xl mb-4">
          Recomendaciones de empleo
        </h1>

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
          <JobDetailPanel
            job={selectedJob}
            onClose={() => setSelectedJob(null)}

            // 👇 PASAMOS FUNCIÓN PARA ABRIR EL MODAL
            onApply={() => setIsApplicationOpen(true)}
          />
        ) : (
          <ProfileSummary />
        )}
      </aside>

      <ChatWidget />
    </div>
  );
};

export default Home;
