import HeadPhoneSVG from "../assets/headphone.svg";

const Header = () => {
  return (
    <div className="border-bottom py-2 mb-4">
      <header className="container d-flex flex-wrap justify-content-between">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          style={{ outlineColor: "blue" }}
        >
          <img src={HeadPhoneSVG} alt="" height={"50px"} />
          <span className="fs-4 px-2 h1 text-primary">Music App</span>
        </a>

        <ul className="nav nav-pills pt-2">
          <form className="form-inline mx-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search music"
              aria-label="Search"
            />
          </form>

          <div className="d-flex">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Music
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Statistics
              </a>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
};

export default Header;
