import { ScrobbleItem } from "../../redux/features/scrobbles/scrobblesSlice";
import ListItem from "../ListItem/ListItem";
import { StyledList } from "./style";

interface ListProps {
  items: ScrobbleItem[];
}

const List = ({ items }: ListProps) => (
  <StyledList>
    {items.map((e) => (
      <ListItem {...e} key={`${e.spotifyId}${e.timestamp}`} />
    ))}
  </StyledList>
);
export default List;
