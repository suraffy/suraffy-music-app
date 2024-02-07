import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

import StaticCard from "../components/common/StaticCard";

const Statistics = () => {
  const musicInfo = useSelector(
    (state: RootState) => state.musicList.musicInfo
  );

  const Quote = styled.p`
    font-family: Georgia, "Times New Roman", Serif;
  `;

  return (
    <>
      <div className="container">
        <motion.div
          layout
          className="d-flex flex-wrap gap-5 justify-content-center"
        >
          <AnimatePresence>
            <StaticCard
              header="Songs"
              count={musicInfo.totalMusic}
              description={`As many as ${musicInfo.totalMusic} songs in here. Enjoy exclusively songs only on our platform..`}
            />
            <StaticCard
              header="Artists"
              count={musicInfo.totalArtist}
              description="Enjoy musics from variety of Artists."
            />
            <StaticCard
              header="Genre"
              count={musicInfo.totalGenre}
              description="Experience the beauty of various music genres."
            />
            <StaticCard
              header="Albums"
              count={musicInfo.totalAlbum}
              description={`${musicInfo.totalAlbum} Albums are waiting to elevate your mood.`}
            />
          </AnimatePresence>
        </motion.div>

        <div className="m-5 mx-auto pt-5 pb-2" style={{ maxWidth: "40rem" }}>
          <figure className="text-center">
            <blockquote className="blockquote">
              <Quote className="display-6">
                &ldquo;Where words fail, music speaks.&rdquo;
              </Quote>
            </blockquote>
            <figcaption className="blockquote-footer">
              John Doe, famous in <cite title="Source Title">Music</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Statistics;
