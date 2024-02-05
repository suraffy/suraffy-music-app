import { useSelector, useDispatch } from "react-redux";
import { update, remove, MusicState } from "../redux/musicSlice";
import type { RootState } from "../store";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";

const Main = () => {
  const musicList = useSelector((state: RootState) => state.musicList.music);
  const dispatch = useDispatch();

  const handleUpdate = (music: MusicState | null) => {
    dispatch(update(music));
  };

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h1 className="mb-3">Musics</h1>
      <motion.div layout className="row justify-content-evenly">
        {musicList.map((music, index) => (
          <div key={index} className="col-lg-6 col-xl-4 mb-4">
            <AnimatePresence>
              <Card
                music={music}
                onUpdate={handleUpdate}
                onRemove={handleRemove}
              />
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Main;
