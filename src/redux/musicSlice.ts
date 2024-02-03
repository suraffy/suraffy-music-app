import musicDB from "../db";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "@reduxjs/toolkit";

export interface MusicState {
  music: {
    id: number;
    title: string;
    artist: string;
    genre: string;
    album: string;
  }[];
}

const initialState: MusicState = {
  music: musicDB,
};

export const musicSlice = createSlice({
  name: "musicList",
  initialState,
  reducers: {
    add: (state: WritableDraft<MusicState>, action: PayloadAction<object>) => {
      state.music = [...state.music, action.payload];
      console.log(action.payload);
    },
    edit: (state: WritableDraft<MusicState>, action: PayloadAction<object>) => {
      state.music = [...state.music, action.payload];
    },
    remove: (
      state: WritableDraft<MusicState>,
      action: PayloadAction<number>
    ) => {
      state.music = state.music.filter((m) => m.id !== action.payload);
    },
  },
});

export const { add, edit, remove } = musicSlice.actions;

export default musicSlice.reducer;
