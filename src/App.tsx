import { Track } from "@spotify/web-api-ts-sdk/src/types";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getCurrentTrack } from "./api/service";
import CurrentlyPlaying from "./components/CurrentlyPlaying/CurrentlyPlaying";
import List from "./components/List/List";
import { getProgressPercentage } from "./helpers/getProgressPercentage";
import { isTrack } from "./helpers/isTrack";
import { addScrobble } from "./redux/features/scrobbles/scrobblesSlice";
import { RootState } from "./redux/store";
import { AppTitle, ListContainer } from "./style";

const REFRESH_RATE = 10000; // ms

interface LastAddedInfos {
  timestamp: number;
  spotifyId: string;
}

function App() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Track | null>(null);
  const [lastAddedInfos, setLastAddedInfos] = useState<LastAddedInfos>({
    timestamp: 0,
    spotifyId: "",
  });
  const scrobblesList = useSelector((state: RootState) => state.scrobbles.list);
  const dispatch = useDispatch();

  const scrobbler = useCallback(async () => {
    const result = await getCurrentTrack();
    if (!result?.item) return;

    setCurrentlyPlaying(result.item as Track);

    if (
      getProgressPercentage(result.item.duration_ms, result.progress_ms) >= 75 &&
      (result.item.id !== lastAddedInfos.spotifyId || result.timestamp !== lastAddedInfos.timestamp)
    ) {
      setLastAddedInfos({
        timestamp: result.timestamp,
        spotifyId: result.item.id,
      });

      dispatch(
        addScrobble({
          name: result.item.name,
          timestamp: result.timestamp,
          spotifyId: result.item.id,
          album: isTrack(result.item) ? result.item.album : null,
        })
      );
    }
  }, [dispatch, lastAddedInfos]);

  useEffect(() => {
    scrobbler();

    const interval = setInterval(async () => {
      await scrobbler();
    }, REFRESH_RATE);

    return () => {
      clearInterval(interval);
    };
  }, [scrobbler]);

  return (
    <div className="App">
      <AppTitle>daily scrobbles ({scrobblesList.length})</AppTitle>
      <ListContainer>
        <List items={scrobblesList} />
      </ListContainer>
      <CurrentlyPlaying
        album={currentlyPlaying?.album}
        name={currentlyPlaying?.name || ""}
        artists={currentlyPlaying?.artists}
        uri={currentlyPlaying?.uri || ""}
      />
    </div>
  );
}

export default App;
