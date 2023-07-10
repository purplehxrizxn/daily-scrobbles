import { SimplifiedAlbum, SimplifiedArtist } from "@spotify/web-api-ts-sdk/src/types";
import { CurrentlyPlayingContainer } from "./style";

interface CurrentlyPlayingProps {
  album: SimplifiedAlbum | undefined;
  name: string;
  artists: SimplifiedArtist[] | undefined;
  uri: string;
}

const CurrentlyPlaying = ({ album, name, artists, uri }: CurrentlyPlayingProps) => {
  return (
    <CurrentlyPlayingContainer>
      <span className="Now-Playing">Now playing:</span>
      <div className="Track">
        <div className="Track-Image">
          <a href={album?.uri}>
            <img src={album?.images[0].url || ""} alt="Album artwork" />
          </a>
        </div>
        <div className="Track-Infos">
          <span className="Track-Container">
            <a className="Track-Name" href={uri}>
              {name}
            </a>
          </span>

          <a className="Album-Name" href={album?.uri}>
            {album?.name}
          </a>
          <div className="Artists-Container">
            <span className="Artists">
              {(artists || []).map((e, i) => (
                <a key={i} href={e.uri}>
                  {e.name}
                  {(artists || []).length - 1 === i ? "" : ", "}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </CurrentlyPlayingContainer>
  );
};

export default CurrentlyPlaying;
