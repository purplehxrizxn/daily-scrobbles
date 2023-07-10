import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SimplifiedAlbum } from "@spotify/web-api-ts-sdk/src/types";
import uuid from "react-uuid";

export interface ScrobblesInterface {
  list: ScrobbleItem[];
}

export type ScrobbleItem = {
  id?: string;
  name: string;
  timestamp: number;
  spotifyId: string;
  album: SimplifiedAlbum | null;
};

export type AddingScrobbleItem = Omit<ScrobbleItem, "id">;

const initialState: ScrobblesInterface = {
  list: [],
};

export const scrobblesSlice = createSlice({
  name: "scrobbles",
  initialState,
  reducers: {
    addScrobble: (state, action: PayloadAction<AddingScrobbleItem>) => {
      state.list = [{ ...action.payload, id: uuid() }, ...state.list];
    },
  },
});

export const { addScrobble } = scrobblesSlice.actions;

export default scrobblesSlice.reducer;
