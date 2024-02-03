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
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: #f6f6f6;
  }
`;

const Sidebar = () => {
  return (
    <div className="mb-5">
      <h2 className="mt-1 mb-3">Genres</h2>
      <UList>
        <List>
          <img src={pop} width={"40px"} className="mx-2" />
          Pop
        </List>
        <List>
          <img src={rock} width={"40px"} className="mx-2" />
          Rock
        </List>
        <List>
          <img src={hiphop} width={"40px"} className="mx-2" />
          Hip Hop
        </List>
        <List>
          <img src={jazz} width={"40px"} className="mx-2" />
          Jazz
        </List>
        <List>
          <img src={blues} width={"40px"} className="mx-2" />
          Blues
        </List>
        <List>
          <img src={electronic} width={"40px"} className="mx-2" />
          Electronic
        </List>
        <List>
          <img src={classical} width={"40px"} className="mx-2" />
          Classical
        </List>
      </UList>
    </div>
  );
};

export default Sidebar;
