import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/musicSlice";
import type { RootState } from "../store";
import Card from "./Card";

const Main = () => {
  const musicList = useSelector((state: RootState) => state.musicList.music);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="">
      <h1 className="mb-3">Musics</h1>
      <div className="row justify-content-evenly">
        {musicList.map((music, index) => (
          <div key={index} className="col-lg-6 col-xl-4 mb-4">
            <Card music={music} onRemove={handleRemove} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
