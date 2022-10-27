import slack from "./slack.png";
import git from "./git.png";
const SocialSection = () => {
  return (
    <div className="social-section">
      <button id="social_section">
        <img src={slack} alt="Slack" />
        <img src={git} alt="git" />
      </button>
    </div>
  );
};

export default SocialSection;
