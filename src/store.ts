import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./redux/musicSlice";

export const store = configureStore({
  reducer: {
    musicList: musicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
