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
};

export const musicSlice = createSlice({
  name: "musicList",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<object>) => {
      const updatedMusic = action.payload;

      const index = state.music.findIndex(
        (music) => music.id === updatedMusic.id
      );

      if (index !== -1) {
        state.music[index] = updatedMusic;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.music = state.music.filter(
        (m: MusicState) => m.id !== action.payload
      );
    },
  },
});

export const { update, remove } = musicSlice.actions;

export default musicSlice.reducer;
