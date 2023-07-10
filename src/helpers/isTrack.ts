import { Episode, Track } from "@spotify/web-api-ts-sdk/src/types";

export function isTrack(song: Track | Episode): song is Track {
  return (song as Track) !== undefined;
}
