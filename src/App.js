import { useState } from "react";
import Gallery from "./components/Gallery";
import Grid from "./components/Grid";
import BottomSidebar from "./components/BottomSidebar";
import styles from "./App.module.scss";

function App() {
  const [activeGallery, setActiveGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        {activeGallery ? (
          <Gallery
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setActiveGallery={setActiveGallery}
          />
        ) : (
          <Grid
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
