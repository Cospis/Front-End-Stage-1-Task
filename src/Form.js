const Forms = () => {
  const name = "Idris";
  return (
    <div className="forms">
      <form>
        <div className="name">
          <div className="firstname">
            <label>First Name </label>
            <input placeholder="Enter your first name" id="first_name" />
          </div>
          <div className="lastname">
            <label>Last Name </label>
            <input placeholder="Enter your last name" id="last_name" />
          </div>
        </div>
        <div className="email">
          <label>Email</label>
          <input placeholder="yourname@email.com" id="email" />
        </div>
        <div className="msg">
          <label>Message</label>
          <textarea
            placeholder="Send a message and I'll reply you as soon as possible"
            id="email"
          />
        </div>
        <div className="chk">
          <input type="checkbox" id="email" />
          <label>
            {" "}
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>
        <button type="submit" id="btn__submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Forms;
