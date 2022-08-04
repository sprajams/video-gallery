import { useState } from "react";
import vidData from "./constants/video_data.json";
import Gallery from "./components/Gallery";
import Grid from "./components/Grid";
import BottomSidebar from "./components/BottomSidebar";
import styles from "./App.module.scss";

function App() {
  const [activeGallery, setActiveGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // smaller subset of data to display
  const dataSnippet = vidData.slice(38, 50);
  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        {activeGallery ? (
          <Gallery
            dataSnippet={dataSnippet}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setActiveGallery={setActiveGallery}
            x
          />
        ) : (
          <Grid
            dataSnippet={dataSnippet}
            setActiveGallery={setActiveGallery}
            setActiveIndex={setActiveIndex}
          />
        )}
      </div>
      <div>
        <BottomSidebar setActiveGallery={setActiveGallery} />
      </div>
    </div>
  );
}

export default App;
