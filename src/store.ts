import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./redux/musicSlice";

export const store = configureStore({
  reducer: {
    musics: musicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
