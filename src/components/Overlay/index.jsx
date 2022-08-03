import { useState } from "react";
import styles from "./styles.module.scss";

const Overlay = () => {
  const [likeCount, setLikeCount] = useState(0);
  const onClickLike = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div className={styles.outer}>
      <div className={styles.textBox}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </div>
      <div className={styles.sideBar}>
        <button className={styles.sideBarBtn} onClick={onClickLike}>
          <span>like</span>
          <span>{likeCount}</span>
        </button>
        <button className={styles.sideBarBtn}>comments</button>
        <button className={styles.sideBarBtn}>share</button>
      </div>
    </div>
  );
};

export default Overlay;
