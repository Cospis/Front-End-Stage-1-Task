const Links = () => {
  return (
    <div className="links-section">
      <a href="https://training.zuri.team" className="team">
        <button id="btn__zuri"> Zuri Team</button>
      </a>
      <a href="http://books.zuri.team" className="books">
        <button id="books"> Zuri Books</button>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=Cospis"
        className="book__python"
      >
        <button id="book__python"> Python Books</button>
      </a>
    </div>
  );
};

export default Links;
