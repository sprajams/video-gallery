import { useState } from "react";
import Gallery from "./components/Gallery";
import Grid from "./components/Grid";
import styles from "./App.module.scss";

function App() {
  const [activeGallery, setActiveGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {activeGallery ? (
          <Gallery activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        ) : (
          <Grid
            setActiveGallery={setActiveGallery}
            setActiveIndex={setActiveIndex}
          />
        )}
      </div>
    </div>
  );
}

export default App;
