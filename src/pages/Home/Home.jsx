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
import Navbar from "../../components/Navbar/NavBar";
import JobCardCompressed from "../../components/JobCard/JobCardCompressed";


import JobApplicationModal from "../../components/ApplicationModal/ApplicationModal";
import ApplicationModal from "../../components/ApplicationModal/ApplicationModal";

const Home = () => {
  const userMock = {
    name: "Ana María Muñoz",
    role: "Diseñadora UX/UI",
    avatar: "https://i.imgur.com/2yaf2wb.jpeg"
  };

  const [courses, setCourses] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  
  // control de vista
  const [view, setView] = useState("dashboard"); // "dashboard" | "allJobs"

  // modal
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

  // Recomendado (solo 1)
  const recommendedJob = courses[0];

  // Vistos recientes (todos)
  const recentJobs = courses.slice(1);

  return (
    <div id="root" className="flex min-h-screen bg-[#F9F9F9]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENEDOR GENERAL */}
      <div className="flex flex-col flex-1 min-h-screen">

        {/* NAVBAR */}
        <Navbar title="Inicio" user={userMock} />

        {/* MODAL */}
        <ApplicationModal
          isOpen={isApplicationOpen}
          onClose={() => setIsApplicationOpen(false)}
        />

        <div className="flex flex-1">

          {/* MAIN */}
          <main className="flex-1 px-6 py-6">

            {/* -------- DASHBOARD -------- */}
            {view === "dashboard" && (
              <>
                <WelcomeBanner name="Ana" />

                {/* RECOMENDADOS */}
                <div className="w-full max-w-[100%] flex justify-between items-center mt-4 mb-4">
                  <h2 className="font-outfit text-xl font-bold">
                    Recomendaciones de empleo
                  </h2>

                  <button 
                    onClick={() => setView("allJobs")}
                    className="text-green-600 text-sm underline"
                  >
                    Ver más
                  </button>
                </div>

                {/* SOLO 1 RECOMENDADO */}
                {recommendedJob && (
                  <JobCard
                    title={recommendedJob.title}
                    company={recommendedJob.company}
                    level={recommendedJob.level}
                    salary={recommendedJob.salary}
                    description={recommendedJob.description}
                    tags={parseJSON(recommendedJob.skills)}
                    timeAgo={recommendedJob.timeAgo}
                    recommended={recommendedJob.recommended}
                    match={recommendedJob.match}
                    onClick={() =>
                      setSelectedJob({
                        ...recommendedJob,
                        tags: parseJSON(recommendedJob.skills) || [],
                      })
                    }
                  />
                )}

                {/* VISTAS RECIENTES */}
                <div className="w-full max-w-[100%] flex justify-between items-center mt-10 mb-4">
                  <h2 className="font-outfit text-xl font-bold">
                    Vistas recientes
                  </h2>

                  <button 
                    onClick={() => setView("allJobs")}
                    className="text-green-600 text-sm underline"
                  >
                    Ver más
                  </button>
                </div>

                {/* SCROLL SOLO EN ESTA SECCIÓN */}
                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2">
                  {recentJobs.map((job, index) => (
                    <JobCardCompressed
                      key={index}
                      title={job.title}
                      company={job.company}
                      timeAgo={job.timeAgo}
                    />
                  ))}
                </div>
              </>
            )}

            {/* -------- VISTA VER MÁS -------- */}
            {view === "allJobs" && (
              <>
                {/* BÚSQUEDA */}
                <div className="w-full max-w-[100%] mb-6">
                  <h1 className="text-2xl font-outfit font-bold mb-4">
                    Recomendaciones de empleo
                  </h1>

                  <input
                    type="text"
                    placeholder="Search here"
                    className="
                      w-full p-3 mb-4 rounded-lg 
                      border border-[var(--color-violet_blue)]
                      outline-none
                    "
                  />

                  <div className="flex gap-4 mb-6">
                    <select className="p-2 border rounded-md w-1/3">
                      <option>Ubicación</option>
                    </select>

                    <select className="p-2 border rounded-md w-1/3">
                      <option>Tipo de empleo</option>
                    </select>

                    <select className="p-2 border rounded-md w-1/3">
                      <option>Experiencia</option>
                    </select>
                  </div>
                </div>

                {/* LISTA COMPLETA (SCROLL PROPIO) */}
                <div className="
                  flex flex-col gap-4 max-w-[100%] 
                  max-h-[calc(100vh-260px)] 
                  overflow-y-auto pr-2
                ">
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
              </>
            )}

          </main>

          {/* PANEL DERECHO */}
          <aside className="w-[30vw] min-w-[280px] border-l border-gray-200">
            {selectedJob ? (
              <JobDetailPanel
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
                onApply={() => setIsApplicationOpen(true)}
              />
            ) : (
              <ProfileSummary />
            )}
          </aside>

        </div>
      </div>

      <ChatWidget />
    </div>
  );
};

export default Home;


