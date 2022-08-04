import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Video from "../Video";
import Overlay from "../Overlay";
import styles from "./styles.module.scss";

const Gallery = ({ dataSnippet, activeIndex, setActiveIndex }) => {
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
    <div className={styles.outer}>
      <div className={styles.inner} ref={viewportRef}>
        <div className={styles.wrap}>
          {dataSnippet.length > 0 &&
            dataSnippet.map((x, i) => {
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
