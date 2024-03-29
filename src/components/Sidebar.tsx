import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { filter } from "../redux/musicSlice";

import styled from "@emotion/styled";
import pop from "../assets/pop.png";
import rock from "../assets/rock.png";
import jazz from "../assets/jazz.jpg";
import blues from "../assets/blues.jpg";
import electronic from "../assets/electronic.jpg";
import hiphop from "../assets/hiphop.jpg";
import classical from "../assets/classical.jpg";

const UList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  color: #444;
  font-size: 1.2rem;
  padding: 8px 0;
  padding-left: 1rem;
  margin: 0;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: #f6f6f6;
  }
`;

const SideCont = styled.div`
  background: white;
  z-index: 1;
  top: 100px;
`;

const activeGenre = {
  background: "#f4f4f4",
};

const Sidebar = () => {
  const filterKeyword = useSelector(
    (state: RootState) => state.musicList.filterKeyword
  );

  const dispatch = useDispatch();

  const handleFilter = (value: string) => {
    dispatch(filter(value));
  };

  return (
    <SideCont className="mb-5 sticky-md-top">
      <h2 className="mt-1 mb-3">Genres</h2>
      <UList>
        <List
          onClick={() => handleFilter("blues")}
          style={filterKeyword === "blues" ? activeGenre : {}}
        >
          <img src={blues} width={"40px"} className="mx-2" />
          Blues
        </List>
        <List
          onClick={() => handleFilter("rock")}
          style={filterKeyword === "rock" ? activeGenre : {}}
        >
          <img src={rock} width={"40px"} className="mx-2" />
          Rock
        </List>
        <List
          onClick={() => handleFilter("jazz")}
          style={filterKeyword === "jazz" ? activeGenre : {}}
        >
          <img src={jazz} width={"40px"} className="mx-2" />
          Jazz
        </List>
        <List
          onClick={() => handleFilter("pop")}
          style={filterKeyword === "pop" ? activeGenre : {}}
        >
          <img src={pop} width={"40px"} className="mx-2" />
          Pop
        </List>
        <List
          onClick={() => handleFilter("classical")}
          style={filterKeyword === "classical" ? activeGenre : {}}
        >
          <img src={classical} width={"40px"} className="mx-2" />
          Classical
        </List>
        <List
          onClick={() => handleFilter("hiphop")}
          style={filterKeyword === "hiphop" ? activeGenre : {}}
        >
          <img src={hiphop} width={"40px"} className="mx-2" />
          Hip Hop
        </List>

        <List
          onClick={() => handleFilter("electronic")}
          style={filterKeyword === "electronic" ? activeGenre : {}}
        >
          <img src={electronic} width={"40px"} className="mx-2" />
          Electronic
        </List>
      </UList>
    </SideCont>
  );
};

export default Sidebar;
