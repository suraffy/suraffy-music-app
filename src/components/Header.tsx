import HeadPhoneSVG from "../assets/headphone.svg";

const Header = () => {
  return (
    <div className="border-bottom py-2 mb-4">
      <header className="container d-flex flex-wrap justify-content-center">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img src={HeadPhoneSVG} alt="" height={"50px"} />
          <span className="fs-4 px-2 h1 text-primary">Music App</span>
        </a>

        <ul className="nav nav-pills pt-2">
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
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
