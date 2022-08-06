import { useState } from "react";
import vidData from "./constants/video_data.json";
import Gallery from "./components/Gallery";
import Grid from "./components/Grid";
import styles from "./App.module.scss";

function App() {
  const [activeGallery, setActiveGallery] = useState(true);
  const [initialIndex, setInitialIndex] = useState(0);

  // smaller subset of data to display
  const dataSnippet = vidData.slice(38, 50);
  return (
    <div className={styles.outer}>
      {activeGallery ? (
        <Gallery
          dataSnippet={dataSnippet}
          initialIndex={initialIndex}
          setInitialIndex={setInitialIndex}
          setActiveGallery={setActiveGallery}
          x
        />
      ) : (
        <Grid
          dataSnippet={dataSnippet}
          setActiveGallery={setActiveGallery}
          setInitialIndex={setInitialIndex}
        />
      )}
    </div>
  );
}

export default App;
