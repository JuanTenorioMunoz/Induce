import React, { useEffect, useState } from "react";
import ChatWidget from "../../components/ChatAI/ChatWidget";
import JobCardCompressed from "../../components/JobCard/JobCardCompressed"; // 👈 compressed card
import { fetchAllFromTable } from "../../utils/supabaseUtils";
import { parseJSON } from "../../utils/utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import JobInfo from "../../components/JobInfo/JobInfo";

const Vacantes = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchAllFromTable("courses");
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };

    loadJobs();
  }, []);

  return (
    <><Sidebar />
      <div className="flex flex-row">
       
        <div className="flex flex-col items-center gap-7 p-6 w-full overflow-y-auto scroll-hide">
          {jobs.map((job, index) => (
            <JobCardCompressed
              key={index}
              title={job.title}
              company={job.company}
              timeAgo={job.timeAgo}
            />
          ))}
        </div>
      </div>

      <ProfileSummary />
      <ChatWidget />
    </>
  );
};

export default Vacantes;
