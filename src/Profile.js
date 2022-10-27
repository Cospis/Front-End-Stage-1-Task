import dp from "./dp.png";
import share from "./share.png";
import share2 from "./share2.png";
const Profile = () => {
  return (
    <div className="conent">
      <div className="profile">
        <img src={dp} alt="dp" id="profile__img" />
        <div className="name">
          {" "}
          <h1> Qozim Idris</h1>
          <div className="share">
            <img src={share} alt="share" />
          </div>
          <div className="share2">
            <img src={share2} alt="share2" />
          </div>
        </div>
      </div>
      <div className="ts">
        <div className="btn-twitter">
          <button id="twitter">cos_pis</button>
        </div>
        <div className="hidden">
          <button id="slack">Cospis</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
