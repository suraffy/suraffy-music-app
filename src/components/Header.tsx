import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../redux/musicSlice";
import HeadPhoneSVG from "../assets/headphone.svg";

const Header = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const handleSearch = (value: string) => {
    setKeyword(value);
    dispatch(search(value));
  };

  return (
    <div className="border-bottom py-2 mb-4 sticky-top bg-white">
      <header className="container d-flex flex-wrap justify-content-between">
        <NavLink
          to="/music"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          style={{ outlineColor: "blue" }}
        >
          <img src={HeadPhoneSVG} alt="" height={"50px"} />
          <span className="fs-4 px-2 h1 text-primary">Music App</span>
        </NavLink>

        <ul className="nav nav-pills pt-2">
          <form
            className="form-inline mx-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search music ♪♪♪"
              value={keyword}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </form>

          <div className="d-flex">
            <li className="nav-item">
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                aria-current="page"
              >
                Music
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                Statistics
              </NavLink>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
};

export default Header;
