import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Video from "../Video";
import Overlay from "../Overlay";
import vidData from "../../constants/video_data.json";
import styles from "./styles.module.scss";

const Gallery = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    axis: "y",
    skipSnaps: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setActiveIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div>
      <div className={styles.inner} ref={viewportRef}>
        <div className={styles.wrap}>
          {[...Array(10)].map((_, i) => {
            return (
              <div className={styles.slide} key={i}>
                <Video data={vidData[i * 3]} active={activeIndex === i} />
                <div className={styles.overlay}>
                  <Overlay />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
