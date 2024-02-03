import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MusicState {
  music: [{ title: string; artist: string; genre: string; album: string }];
}

const initialState: MusicState = {
  music: [{ title: "", artist: "", genre: "", album: "" }],
};

export const musicSlice = createSlice({
  name: "musics",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<object>) => {
      state.music = [...state.music, action.payload];
    },
    edit: (state, action: PayloadAction<object>) => {
      state.music = [...state.music, action.payload];
    },
    delete: (state, action: PayloadAction<object>) => {
      state.music = [...state.music, action.payload];
    },
  },
});

export const { add, edit, delete } = musicSlice.actions;

export default musicSlice.reducer;
