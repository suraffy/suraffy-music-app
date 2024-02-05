import { useFormik } from "formik";
import * as Yup from "yup";
import { MusicState } from "../../redux/musicSlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Song title is required"),
  artist: Yup.string().required("Artist name is required"),
  genre: Yup.string().required("Song genre is required"),
  album: Yup.string(),
});

interface Props {
  music: MusicState;

  onCloseModal: (value: MusicState | null) => void;
}

const Form = ({ music, onCloseModal }: Props) => {
  const formik = useFormik({
    initialValues: {
      id: music.id,
      title: music.title,
      artist: music.artist,
      genre: music.genre,
      album: music.album,
    },
    onSubmit: (value: MusicState) => {
      onCloseModal(value);
    },

    validationSchema: schema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="song-title">Song Title</label>
        <input
          type="text"
          className="form-control"
          id="song-title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          autoFocus
        />
        {formik.errors.title && (
          <small className="form-text text-danger">{formik.errors.title}</small>
        )}
      </div>

      <div className="form-group mb-3">
        <select
          className="form-control"
          name="genre"
          value={"formik.values.genre"}
          onChange={formik.handleChange}
        >
          <option>Select Genre</option>
          <option value={"pop"}>Pop</option>
          <option value={"jazz"}>Jazz</option>
          <option value={"blues"}>Blues</option>
          <option value={"rock"}>Rock</option>
          <option value={"hiphop"}>Hip Hop</option>
          <option value={"electronic"}>Electronic</option>
          <option value={"classical"}>Classical</option>
        </select>

        {formik.errors.genre && (
          <small className="form-text text-danger">{formik.errors.genre}</small>
        )}
      </div>

      <div className="row">
        <div className="form-group mb-2 col">
          <label htmlFor="artist-name">Artist Name</label>
          <input
            type="text"
            className="form-control"
            id="artist-name"
            name="artist"
            value={formik.values.artist}
            onChange={formik.handleChange}
          />
          {formik.errors.artist && (
            <small className="form-text text-danger">
              {formik.errors.artist}
            </small>
          )}
        </div>

        <div className="form-group mb-2 col">
          <label htmlFor="song-album">Album</label>
          <input
            type="text"
            className="form-control"
            id="song-album"
            name="album"
            value={formik.values.album}
            onChange={formik.handleChange}
            placeholder="Single"
          />
          {formik.errors.album && (
            <small className="form-text text-danger">
              {formik.errors.album}
            </small>
          )}
        </div>
      </div>

      <div className="modal-footer justify-content-center">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onCloseModal(null)}
        >
          Discard
        </button>
        <button className="btn btn-warning" type="submit">
          Update music
        </button>
      </div>
    </form>
  );
};

export default Form;
