import PsHeader from "./PsHeader";
import CvProgress from "./CvProgress";
import SkillList from "./SkillList";
import JobStats from "./JobStats";

const ProfileSummary = ({
  user = { name: "Usuario", role: "", photoUrl: "" },
  cvProgress = 0,
  skills = [],
  stats = { sent: 0, viewed: 0, alerts: 0 },
}) => {
  const handleCompleteCV = () => {
    console.log("Completar CV con IA");
  };

  return (
    <section className="flex flex-col gap-6 bg-[var(--color-alice_blue)] p-6 rounded-2xl shadow-md max-w-lg w-full mx-auto">
      <PsHeader
        name={user.name}
        role={user.role}
        photoUrl={user.photoUrl}
      />

      <CvProgress
        progress={cvProgress}
        onComplete={handleCompleteCV}
      />

      <SkillList skills={skills} />

      <JobStats
        sent={stats.sent}
        viewed={stats.viewed}
        alerts={stats.alerts}
      />
    </section>
  );
};

export default ProfileSummary;