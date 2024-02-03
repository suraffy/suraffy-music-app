import styled from "@emotion/styled";
import HeadPhoneSVG from "../assets/headphone.svg";
import MenuIcon from "../assets/menu-icon.svg";

const NavbarTogglerIcon = styled.span`
  background-image: none !important;
  background-color: var(--bs-gray-800);
  height: 3px;
  width: 25px;
  margin: 10px 0;
  position: relative;
  transition: all 0.35s ease-out;
  transform-origin: center;
`;

const Header = () => {
  return (
    <div className="border-bottom py-2 mb-4">
      <header className="container d-flex flex-wrap justify-content-between">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img src={HeadPhoneSVG} alt="" height={"50px"} />
          <span className="fs-4 px-2 h1 text-primary">Music App</span>
        </a>

        <div className="d-md-none btn border align-self-center">
          <img src={MenuIcon} width={"25px"} />
        </div>

        <ul className="nav nav-pills pt-2">
          <form className="form-inline mx-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search music"
              aria-label="Search"
            />
          </form>

          <div className="d-none d-md-flex">
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
