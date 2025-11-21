import React from "react";
import Frame from "./Frame";

const JobInfo = ({
  company,
  logoLetter,
  position,
  location,
  timeCreated,
  clicks,
  skills,
  onClose,
  onApply,
  onSave,
}) => {
  return (
    <section className="flex flex-col items-end w-full max-w-[340px] gap-6 mt-8 ml-auto mr-8 font-primary">
      <Frame
        company={company}
        logoLetter={logoLetter}
        position={position}
        location={location}
        timeCreated={timeCreated}
        clicks={clicks}
        skills={skills}
        onClose={onClose}
        onApply={onApply}
        onSave={onSave}
      />
    </section>
  );
};

export default JobInfo;
