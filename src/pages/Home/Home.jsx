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

  // Modal
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

  // 🔥 Simulación de "vistos recientemente"
  const recentlyViewed = courses.slice(0, 6); // por ahora inventado

  return (
    <div id="root" className="flex min-h-screen">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 min-h-screen">

        {/* NAVBAR */}
        <Navbar title="Inicio" user={userMock} />

        {/* MODAL */}
        <ApplicationModal
          isOpen={isApplicationOpen}
          onClose={() => setIsApplicationOpen(false)}
        />

        {/* MAIN CONTENT + PANEL */}
        <div className="flex flex-row flex-1 overflow-hidden">

          {/* MAIN CONTENT */}
          <main className="flex-1 px-6 py-6">

            <WelcomeBanner name="Ana" />

            {/* === RECOMENDACIONES === */}
            <div className="flex items-center justify-between mt-6 mb-2">
              <h1 className="font-outfit text-[var(--color-texto-titulos_y_destacado)] text-2xl">
                Recomendaciones en empleo
              </h1>

              <button className="text-sm text-green-600 hover:underline">
                Ver más
              </button>
            </div>

            {/* recomendación única */}
            <div className="flex flex-col items-center gap-4 mb-10">
              {courses.length > 0 && (
                <JobCard
                  title={courses[0].title}
                  company={courses[0].company}
                  level={courses[0].level}
                  salary={courses[0].salary}
                  description={courses[0].description}
                  tags={parseJSON(courses[0].skills)}
                  timeAgo={courses[0].timeAgo}
                  recommended={courses[0].recommended}
                  match={courses[0].match}
                  onClick={() =>
                    setSelectedJob({
                      ...courses[0],
                      tags: parseJSON(courses[0].skills) || [],
                    })
                  }
                />
              )}
            </div>

            {/* === VISTAS RECIENTES === */}
            <div className="flex items-center justify-between mt-4 mb-2">
              <h2 className="font-outfit text-[var(--color-texto-titulos_y_destacado)] text-xl">
                Vistas recientes
              </h2>

              <button className="text-sm text-green-600 hover:underline">
                Ver más
              </button>
            </div>

            {/* lista scrollable independiente */}
            <div
              className="overflow-y-auto pr-2"
              style={{ maxHeight: "46vh" }}
            >
              <div className="flex flex-col items-center gap-4">
                {courses.map((course, index) => (
                  <JobCardCompressed
                    key={`recent-${index}`}
                    title={course.title}
                    company={course.company}
                    timeAgo={course.timeAgo || "Hace 2 días"}
                  />
                ))}
              </div>
            </div>

          </main>

          {/* RIGHT PANEL */}
          <aside className="w-[30vw] min-w-[280px] border-l border-gray-200 overflow-y-auto">
            {selectedJob ? (
              <JobDetailPanel
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
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

