import Form from "./Form";

const EditModal = () => {
  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Music
              </h5>
              <button
                type="button"
                className="close btn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  aria-hidden="true"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Discard
              </button>
              <button type="button" className="btn btn-warning">
                Update music
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
