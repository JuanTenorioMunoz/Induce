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

  return (
    <div id="root" className="flex min-h-screen">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE - EVERYTHING EXCEPT SIDEBAR */}
      <div className="flex flex-col flex-1 min-h-screen">

        {/* NAVBAR ARRIBA DE TODO */}
        <Navbar title="Inicio" user={userMock} />

        {/* MODAL */}
        <ApplicationModal
          isOpen={isApplicationOpen}
          onClose={() => setIsApplicationOpen(false)}
        />

        {/* MAIN LAYOUT: CONTENT + JOB PANEL */}
        <div className="flex flex-row flex-1">

          {/* MAIN CONTENT */}
          <main className="flex-1 px-6 py-6 overflow-y-auto">
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


