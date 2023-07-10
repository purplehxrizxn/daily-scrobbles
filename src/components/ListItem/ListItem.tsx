import { SimplifiedAlbum } from "@spotify/web-api-ts-sdk/src/types";
import { StyledListItem } from "./style";

interface ListItemProps {
  name: string;
  album: SimplifiedAlbum | null;
  timestamp: number;
}

const ListItem = ({ name, album }: ListItemProps) => {
  return (
    <StyledListItem>
      <div className="Image-Container">
        <a href={album?.uri}>
          <img src={album?.images[0].url || ""} alt="Album cover" />
        </a>
      </div>
      <span className="List-Item-Song">{`${name} `}</span>
      <span style={{ display: "block", marginRight: 5, marginLeft: 5 }}>{"-"}</span>

      <span className="List-Item-Band">
        {" "}
        {album?.artists.map((e, i) => (
          <a key={i} href={e.uri}>
            {e.name}
            {album?.artists.length - 1 === i ? "" : ", "}
          </a>
        ))}
      </span>
    </StyledListItem>
  );
};

export default ListItem;
