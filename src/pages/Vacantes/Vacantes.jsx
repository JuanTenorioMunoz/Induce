import React, { useEffect, useState } from "react";
import ChatWidget from "../../components/ChatAI/ChatWidget";
import JobCardCompressed from "../../components/JobCard/JobCardCompressed"; // 👈 compressed card
import { fetchAllFromTable } from "../../utils/supabaseUtils";
import { parseJSON } from "../../utils/utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import JobInfo from "../../components/JobInfo/JobInfo";
import NavBar from "../../components/Navbar/NavBar";
import VacanciesList from "../../components/VacanciesList/VacanciesList";

const Vacantes = () => {

  const userMock = {
    name: "Ana María Muñoz",
    role: "Diseñadora UX/UI",
    avatar: "https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg"
  };

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchAllFromTable("courses");

        // Simulamos estados como en tu diseño
        const mocked = data.map((job, index) => ({
          ...job,
          status: [
            "Aceptada",
            "En revisión",
            "Finalizada",
            "Rechazada",
            "En revisión",
            "Guardada"
          ][index % 6],
          location:
            ["Remoto", "Bogotá, Colombia", "Remoto", "Medellín, Colombia", "Remoto", "Virtual"][
              index % 6
            ],
        }));

        setJobs(mocked);

      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };

    loadJobs();
  }, []);


  return (
    <div id="root" className="flex min-h-screen bg-[#F9F9F9]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENEDOR */}
      <div className="flex flex-col flex-1">

        {/* NAVBAR */}
        <NavBar title="Mis Vacantes" user={userMock} />

        <main className="flex-1 px-8 py-8 max-w-7/8">

          {/* BANNER MORADO */}
          <div
            className="
              bg-(--color-violet-blue-500)
              rounded-xl p-8 text-white mb-10
              shadow-lg 
              
            "
            
          >
            <h1 className=" font-outfit text-2xl font-bold mb-2">
              ¡Hola, Ana!
            </h1>

            <p className="mb-4">
              Encuentras las vacantes que has guardado y para las que te has postulado.
            </p>

            <button
              className="
                bg-(--color-buttons-primarygreen-default) text-black
                px-5 py-2 rounded-md
                font-medium
              "
            >
              Más información
            </button>
          </div>


          {/* LISTADO */}
          <VacanciesList jobs={jobs} />

        </main>
      </div>

      <ChatWidget />

    </div>
  );
};

export default Vacantes;