import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Video from "../Video";
import Overlay from "../Overlay";
import vidData from "../../constants/video_data.json";
import styles from "./styles.module.scss";

const Gallery = ({ activeIndex, setActiveIndex }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    axis: "y",
    skipSnaps: false,
  });

  // scroll to the selected index video
  useEffect(() => {
    if (!embla) return;
    embla.scrollTo(activeIndex, true);
  }, [embla, activeIndex]);

  // handle changing
  const onSelect = useCallback(() => {
    if (!embla) return;
    setActiveIndex(embla.selectedScrollSnap());
  }, [embla, setActiveIndex]);
  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div>
      <div className={styles.inner} ref={viewportRef}>
        <div className={styles.wrap}>
          {vidData.length > 0 &&
            vidData.map((x, i) => {
              return (
                <div className={styles.slide} key={i}>
                  <Video data={x} active={activeIndex === i} />
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
