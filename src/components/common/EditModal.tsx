import styled from "@emotion/styled";
import Form from "./Form";
import { MusicState } from "../../redux/musicSlice";

interface Props {
  openModal: boolean;
  music: {
    id: number;
    title: string;
    artist: string;
    genre: string;
    album: string;
  };
  onCloseModal: (music: MusicState | null) => void;
}

const EditModal = ({ openModal, music, onCloseModal }: Props) => {
  const Modal = styled.div`
    display: block;
    background: rgba(0, 0, 0, 0.5);
  `;

  const CloseBtn = styled.button`
    font-size: 24px;
    font-weight: bold;
  `;

  return (
    <div>
      <Modal className={`modal fade ${openModal ? "show" : "hide d-none"}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Music</h5>
              <CloseBtn className="btn" onClick={() => onCloseModal(null)}>
                &times;
              </CloseBtn>
            </div>
            <div className="modal-body">
              <Form music={music} onCloseModal={onCloseModal} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
