import { useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Video = ({ data, active }) => {
  const { src, thumbnail } = data;

  //   useEffect(() => {
  //     console.log(active ? "should play" : "pause");
  //   }, [active]);

  return (
    <div className={clsx(styles.vidWrap, active && styles.active)}>
      <video autoPlay={true} loop={true} muted className={styles.video}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
