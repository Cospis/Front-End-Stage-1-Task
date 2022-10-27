import zuri from "./zuri.png";
import I4G from "./I4G.png";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footer">
        <img src={zuri} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G" />
      </div>
    </div>
  );
};

export default Footer;
