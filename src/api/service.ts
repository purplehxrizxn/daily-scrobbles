import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { AccessToken } from "@spotify/web-api-ts-sdk/dist/mjs/types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const SpotifySdk = SpotifyApi.withUserAuthorization(CLIENT_ID || "", "http://localhost:3000/callback", [
  "user-read-currently-playing",
]);

export const getCurrentTrack = async () => {
  return await SpotifySdk.player.getCurrentlyPlayingTrack();
};

export const handleUserFirstAccess = async () => {
  const result = await SpotifySdk.authenticate();

  if (!result) return console.error("Erro ao autorizar.");

  setTokenInfosOnLocalStorage(result);
};

const setTokenInfosOnLocalStorage = ({ access_token, token_type, expires_in, refresh_token }: AccessToken) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("token_type", token_type);
  localStorage.setItem("expires_in", expires_in.toString());
  localStorage.setItem("refresh_token", refresh_token);
};

export const returnSpotifySdk = SpotifySdk;
