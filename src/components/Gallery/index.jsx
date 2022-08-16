import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Slide from "../Slide";
import styles from "./styles.module.scss";

const Gallery = ({ dataSnippet, initialIndex, setActiveGallery }) => {
  let navigate = useNavigate();
  const navHome = () => {
    navigate("/", { replace: true });
  };
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    axis: "y",
    speed: 4,
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
    const nextIndex = embla.selectedScrollSnap();
    setActiveIndex(nextIndex);
    navigate(`/video/${nextIndex + 1}`, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla, setActiveIndex]);
  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const onSlideClick = useCallback(() => {
    if (embla && embla.clickAllowed()) {
      embla.reInit({ draggable: false });
    }
  }, [embla]);

  const onSlideClose = useCallback(() => {
    embla.reInit({ draggable: true });
  }, [embla]);
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
                  onSlideClick={onSlideClick}
                  onSlideClose={onSlideClose}
                  navHome={navHome}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
