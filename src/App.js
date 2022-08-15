import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import vidData from "./constants/video_data.json";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import styles from "./App.module.scss";
import clsx from "clsx";

function App() {
  let location = useLocation();

  const [activeGallery, setActiveGallery] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  // deep linked, for when user tries to reach a specific video
  useEffect(() => {
    if (location.pathname.includes(`/video/`)) {
      const arr = location.pathname.split("/");
      setInitialIndex(Number(arr[arr.length - 1]) - 1);
      setActiveGallery(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // smaller subset of data to display
  const dataSnippet = vidData.slice(38, 50);
  return (
    <div className={clsx(styles.outer, activeGallery && styles.activeGallery)}>
      <Home
        dataSnippet={dataSnippet}
        setActiveGallery={setActiveGallery}
        setInitialIndex={setInitialIndex}
      />

      <div className={clsx(styles.galleryWrap, activeGallery && styles.active)}>
        <Gallery
          dataSnippet={dataSnippet}
          initialIndex={initialIndex}
          setInitialIndex={setInitialIndex}
          setActiveGallery={setActiveGallery}
        />
      </div>
    </div>
  );
}

export default App;
