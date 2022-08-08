import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Slide from "../Slide";
import styles from "./styles.module.scss";

const Gallery = ({
  dataSnippet,
  activeIndex,
  setActiveIndex,
  setActiveGallery,
}) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    axis: "y",
    skipSnaps: true,
    speed: 2,
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
    <div className={styles.outer} ref={viewportRef}>
      <div className={styles.inner}>
        {dataSnippet.length > 0 &&
          dataSnippet.map((x, i) => {
            return (
              <div className={styles.slideWrap} key={i}>
                <Slide
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
