import { useSelector } from "react-redux";
import type { RootState } from "../store";
import styled from "@emotion/styled";

import Footer from "../components/Footer";
import Header from "../components/Header";
import StaticCard from "../components/common/StaticCard";

const Statistics = () => {
  const musicList = useSelector((state: RootState) => state.musicList.music);
  const songs = musicList;
  const artists = [...new Set(musicList.map((m) => m.artist))];
  const genres = [...new Set(musicList.map((m) => m.genre))];
  const albums = [...new Set(musicList.map((m) => m.album))];

  const Quote = styled.p`
    font-family: Georgia, "Times New Roman", Serif;
  `;

  return (
    <>
      <Header />

      <div className="container">
        <div className="d-flex flex-wrap gap-5 justify-content-center">
          <StaticCard
            header="Songs"
            count={songs.length}
            description={`As many as ${songs.length} songs in here. Enjoy exclusively songs only on our platform..`}
          />
          <StaticCard
            header="Artists"
            count={artists.length}
            description="Enjoy musics from variety of Artists."
          />
          <StaticCard
            header="Genre"
            count={genres.length}
            description="Experience the beauty of various music genres."
          />
          <StaticCard
            header="Albums"
            count={albums.length}
            description={`${albums.length} Albums are waiting to elevate your mood.`}
          />
        </div>

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

      <Footer />
    </>
  );
};

export default Statistics;
