import musicDB from "../db";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MusicState {
  id: number;
  title: string;
  artist: string;
  genre: string;
  album: string;
}

const initialState = {
  music: musicDB,
  musicInfo: {
    totalMusic: musicDB.length,
    totalArtist: [...new Set(musicDB.map((m) => m.artist))].length,
    totalGenre: 8,
    totalAlbum: [...new Set(musicDB.map((m) => m.album))].length,
  },
  filterKeyword: "",
};

export const musicSlice = createSlice({
  name: "musicList",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<MusicState | null>) => {
      const updatedMusic = action.payload;

      const index = state.music.findIndex(
        (music) => music.id === updatedMusic?.id
      );

      if (index !== -1) {
        if (updatedMusic) {
          state.music[index] = updatedMusic;
        }
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.music = state.music.filter(
        (m: MusicState) => m.id !== action.payload
      );

      state.musicInfo.totalMusic -= 1;
    },

    search: (state, action: PayloadAction<string>) => {
      const searchPattern = new RegExp(action.payload, "i");

      state.filterKeyword = "";

      state.music = musicDB.filter(
        (m) =>
          m.title.search(searchPattern) !== -1 ||
          m.artist.search(searchPattern) !== -1
      );
    },

    filter: (state, action: PayloadAction<string>) => {
      const filterGenre = action.payload.toLowerCase();

      state.filterKeyword = filterGenre;

      state.music = musicDB.filter(
        (m) => m.genre.toLowerCase().replace(/\s+/g, "") === filterGenre
      );
    },
  },
});

export const { update, remove, search, filter } = musicSlice.actions;

export default musicSlice.reducer;
