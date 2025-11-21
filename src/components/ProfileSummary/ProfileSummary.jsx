import PsHeader from "./PsHeader";
import CvProgress from "./CvProgress";
import SkillList from "./SkillList";
import JobStats from "./JobStats";

const ProfileSummary = ({
  user = { name: "Ana María Muñoz", role: "Diseñadora UX/UI", photoUrl: "https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg" },
  cvProgress = 75,
  skills = ["Diseño UX", "Diseño UI", "Figma", "Investigación", "Prototipado"],
  stats = { sent: 12, viewed: 45, alerts: 8 },
}) => {
  const handleCompleteCV = () => {
    console.log("Completar CV con IA");
  };

  return (
    <section className="profile-summary">
      <div className="profile-card">
        <PsHeader name={user.name} role={user.role} photoUrl={user.photoUrl} />
        <CvProgress progress={cvProgress} onComplete={handleCompleteCV} />
        <SkillList skills={skills} />
      </div>

      <JobStats sent={stats.sent} viewed={stats.viewed} alerts={stats.alerts} />
    </section>
  );
};

export default ProfileSummary;