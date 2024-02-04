import styled from "@emotion/styled";
import Form from "./Form";

interface Props {
  openModal: boolean;
  music: {
    id: number;
    title: string;
    artist: string;
    genre: string;
    album: string;
  };
  onCloseModal: () => void;
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
              <CloseBtn className="btn" onClick={onCloseModal}>
                &times;
              </CloseBtn>
            </div>
            <div className="modal-body">
              <Form music={music} />
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-secondary" onClick={onCloseModal}>
                Discard
              </button>
              <button className="btn btn-warning">Update music</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
