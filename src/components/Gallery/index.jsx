import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Slide from "../Slide";
import styles from "./styles.module.scss";

const Gallery = ({ dataSnippet, initialIndex, setActiveGallery }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    axis: "y",
    speed: 8,
  });

  // scroll to the selected index video
  useEffect(() => {
    if (!embla) return;
    embla.scrollTo(initialIndex, true);
  }, [embla, initialIndex]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);

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
    <div className={styles.outer} ref={viewportRef}>
      <div className={styles.inner}>
        {dataSnippet.length > 0 &&
          dataSnippet.map((x, i) => {
            return (
              <div className={styles.slideWrap}>
                <Slide
                  key={i}
                  data={x}
                  active={activeIndex === i}
                  setActiveGallery={setActiveGallery}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
