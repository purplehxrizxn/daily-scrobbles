import { configureStore } from "@reduxjs/toolkit";
import scrobblesReducer from "./features/scrobbles/scrobblesSlice";

export const store = configureStore({
  reducer: {
    scrobbles: scrobblesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
