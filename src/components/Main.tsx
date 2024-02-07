import { useSelector, useDispatch } from "react-redux";
import { update, remove, MusicState } from "../redux/musicSlice";
import type { RootState } from "../store";
import { motion, AnimatePresence } from "framer-motion";
import LoadingImage from "../assets/Dual Ball.svg";
import musicThumbnail from "../assets/music-image.svg";
import Card from "./Card";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const LoadingMusic = styled.div`
  margin-top: 8rem;
  margin-left: -5rem;
`;

const LoadingHeading = styled.h2`
  color: #333;
  font-size: 3rem;
  margin-bottom: 0;
`;

const LoadingSubtext = styled.div`
  color: #666;
  font-size: 1rem;
  margin-top: -10px;
  margin-left: -90px;
`;

const Main = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = musicThumbnail;

    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  const musicList = useSelector((state: RootState) => state.musicList.music);
  const dispatch = useDispatch();

  const handleUpdate = (music: MusicState | null) => {
    dispatch(update(music));
  };

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return isImageLoaded ? (
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
  ) : (
    <LoadingMusic className="text-center">
      <LoadingHeading>
        Loading <img src={LoadingImage} alt="" />
      </LoadingHeading>
      <LoadingSubtext>suraffy - musicApp</LoadingSubtext>
    </LoadingMusic>
  );
};

export default Main;
