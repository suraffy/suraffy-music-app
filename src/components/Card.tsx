import styled from "@emotion/styled";
import musicThumbnail from "../assets/music-image.svg";

const CardBox = styled.div`
  max-width: 18rem;
`;

const CardImage = styled.img``;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const Card = () => {
  return (
    <CardBox className="card">
      <CardImage
        className="card-img-top"
        src={musicThumbnail}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title h6">
          Shape of You &bull;{" "}
          <span style={{ fontWeight: "normal" }}>by Ed Shreen</span>
        </h5>
        <ul>
          <li>
            Genre: <BoldSpan>Pop</BoldSpan>
          </li>
          <li>
            Album: <BoldSpan>Divide</BoldSpan>
          </li>
        </ul>
        <div className="d-flex flex-wrap">
          <button className="btn btn-warning btn-sm px-3 mx-2">Edit</button>
          <button className="btn btn-danger btn-sm mx-2">Delete</button>
        </div>
      </div>
    </CardBox>
  );
};

export default Card;
