import { useEffect, useRef } from "react";
import Overlay from "../Overlay";
import styles from "./styles.module.scss";

const Slide = ({
  data,
  active,
  setActiveGallery,
  onSlideClick,
  onSlideClose,
  navHome,
}) => {
  const { src } = data;

  const videoRef = useRef(false);

  useEffect(() => {
    if (active) {
      // play vid
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      // restart
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);

  return (
    <div className={styles.slideWrap}>
      <div className={styles.vidWrap}>
        <video
          ref={videoRef}
          loop={true}
          autoPlay
          muted
          playsInline
          className={styles.video}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay}>
        <Overlay
          setActiveGallery={setActiveGallery}
          onSlideClick={onSlideClick}
          onSlideClose={onSlideClose}
          navHome={navHome}
        />
      </div>
    </div>
  );
};

export default Slide;
