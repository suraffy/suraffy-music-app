import styled from "@emotion/styled";
import DeleteModal from "./common/DeleteModal";
import EditModal from "./common/EditModal";
import musicThumbnail from "../assets/music-image.svg";
import { useState } from "react";
import { MusicState } from "../redux/musicSlice";

const CardBox = styled.div`
  max-width: 20rem;
`;

const CardImage = styled.img``;

const BoldSpan = styled.span`
  font-weight: bold;
`;

interface Props {
  music: {
    id: number;
    title: string;
    artist: string;
    genre: string;
    album: string;
  };
  onUpdate: (music: MusicState) => void;
  onRemove: (id: number) => void;
}

const Card = ({ music, onUpdate, onRemove }: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleCloseDeleteModal = (confirm: boolean) => {
    if (confirm) onRemove(music.id);

    setOpenDeleteModal(false);
  };

  const handleCloseEditModal = (music: MusicState) => {
    if (music) onUpdate(music);

    setOpenEditModal(false);
  };

  return (
    <>
      <DeleteModal
        openModal={openDeleteModal}
        onCloseModal={handleCloseDeleteModal}
      />

      <EditModal
        openModal={openEditModal}
        music={music}
        onCloseModal={handleCloseEditModal}
      />

      <CardBox className="card">
        <CardImage
          className="card-img-top"
          src={musicThumbnail}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title h6 d-flex justify-content-between">
            <span>{music.title}</span>
            <span style={{ fontWeight: "normal" }}>🎤 {music.artist}</span>
          </h5>
          <ul>
            <li>
              Genre: <BoldSpan>{music.genre}</BoldSpan>
            </li>
            <li>
              Album: <BoldSpan>{music.album}</BoldSpan>
            </li>
          </ul>
          <div className="d-flex flex-wrap justify-content-center">
            <button
              className="btn btn-warning btn-sm px-3 mx-2"
              onClick={() => setOpenEditModal(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm mx-2"
              onClick={() => setOpenDeleteModal(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default Card;
