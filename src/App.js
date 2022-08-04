import { useState } from "react";
import Gallery from "./components/Gallery";
import Grid from "./components/Grid";
import styles from "./App.module.scss";

function App() {
  const [activeGallery, setActiveGallery] = useState(false);
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {activeGallery ? (
          <Gallery />
        ) : (
          <Grid setActiveGallery={setActiveGallery} />
        )}
      </div>
    </div>
  );
}

export default App;
