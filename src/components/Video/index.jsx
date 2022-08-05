import { useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Video = ({ data, active }) => {
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
    <div className={clsx(styles.vidWrap, active && styles.active)}>
      <video
        ref={videoRef}
        loop={true}
        muted
        poster
        webkit-playsinline
        playsInline
        className={styles.video}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
