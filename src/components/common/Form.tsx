interface Props {
  music: {
    id: number;
    title: string;
    artist: string;
    genre: string;
    album: string;
  };
}

const Form = ({ music }: Props) => {
  return (
    <form>
      <div className="form-group mb-2">
        <label htmlFor="song-title">Song Title</label>
        <input
          type="text"
          className="form-control"
          id="song-title"
          name="title"
          defaultValue={music.title}
          autoFocus
        />
        <small className="form-text text-danger">
          Error Message appears here
        </small>
      </div>

      <div className="form-group mb-3">
        <select className="form-control">
          <option>Select Genre</option>
          <option value={"pop"}>Pop</option>
          <option value={"jazz"}>Jazz</option>
          <option value={"blues"}>Blues</option>
          <option value={"rock"}>Rock</option>
          <option value={"hiphop"}>Hip Hop</option>
          <option value={"electronic"}>Electronic</option>
          <option value={"classical"}>Classical</option>
        </select>

        <small className="form-text text-danger">
          Error Message appears here
        </small>
      </div>

      <div className="row">
        <div className="form-group mb-2 col">
          <label htmlFor="artist-name">Artist Name</label>
          <input
            type="text"
            className="form-control"
            id="artist-name"
            name="artist"
            defaultValue={music.artist}
          />
          <small className="form-text text-danger">
            Error Message appears here
          </small>
        </div>

        <div className="form-group mb-2 col">
          <label htmlFor="song-album">Album</label>
          <input
            type="text"
            className="form-control"
            id="song-album"
            name="album"
            defaultValue={music.album}
          />
          <small className="form-text text-danger">
            Error Message appears here
          </small>
        </div>
      </div>
    </form>
  );
};

export default Form;
