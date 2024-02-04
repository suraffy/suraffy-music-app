import styled from "@emotion/styled";

interface Props {
  openModal: boolean;
  onCloseModal: (confirm: boolean) => void;
}

const DeleteModal = ({ openModal, onCloseModal }: Props) => {
  const Modal = styled.div`
    display: block;
    background: rgba(0, 0, 0, 0.5);
  `;

  const CloseBtn = styled.button`
    font-size: 24px;
    font-weight: bold;
  `;

  return (
    <>
      <Modal className={`modal fade ${openModal ? "show" : "hide d-none"}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Music</h5>
              <CloseBtn className="btn" onClick={() => onCloseModal(false)}>
                &times;
              </CloseBtn>
            </div>
            <div className="modal-body">
              <p>Are you sure, you want to delete this music?</p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-secondary"
                onClick={() => onCloseModal(false)}
              >
                Discard
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onCloseModal(true)}
              >
                Delete music
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
