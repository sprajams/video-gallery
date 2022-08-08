import { useState } from "react";
import Comments from "../Comments";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Overlay = ({ setActiveGallery }) => {
  // start likeCount at a random number per post
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 980));
  const [likeBtnActive, setLikeBtnActive] = useState(false);
  const [dislikeBtnActive, setDislikeBtnActive] = useState(false);

  const onClickLike = () => {
    if (dislikeBtnActive) {
      setLikeCount(likeCount + 2);
      setLikeBtnActive(true);
      setDislikeBtnActive(false);
    } else if (likeBtnActive) {
      setLikeCount(likeCount - 1);
      setLikeBtnActive(false);
    } else {
      setLikeBtnActive(true);
      setLikeCount(likeCount + 1);
    }
  };
  const onClickDislike = () => {
    if (likeBtnActive) {
      setLikeCount(likeCount - 2);
      setLikeBtnActive(false);
      setDislikeBtnActive(true);
    } else if (dislikeBtnActive) {
      setLikeCount(likeCount + 1);
      setDislikeBtnActive(false);
    } else {
      setDislikeBtnActive(true);
      setLikeCount(likeCount - 1);
    }
  };

  const [activeComments, setActiveComments] = useState(false);
  const onClickComments = () => {
    setActiveComments(true);
  };

  const onClickHome = () => {
    setActiveGallery(false);
  };
  return (
    <div className={styles.outer}>
      <button className={styles.backBtn} onClick={onClickHome}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div>
        <p className={styles.textBox}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>

        <div className={styles.sideBar}>
          <div>
            {/********** like btn **********/}
            <button
              className={clsx(
                likeBtnActive && styles.active,
                styles.sideBarBtn
              )}
              onClick={onClickLike}
            >
              {/* like icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </button>
            <h4 className={styles.numLikes}>{likeCount}</h4>
            {/********** dislike btn **********/}
            <button
              className={clsx(
                dislikeBtnActive && styles.active,
                styles.sideBarBtn
              )}
              onClick={onClickDislike}
            >
              {/* dislike icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
            </button>
          </div>
          <button className={styles.sideBarBtn} onClick={onClickComments}>
            {/* comments icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className={styles.sideBarBtn}>
            {/* share icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </button>
        </div>
      </div>
      {activeComments && (
        <div className={styles.commentBox}>
          <Comments setActiveComments={setActiveComments} />
        </div>
      )}
    </div>
  );
};

export default Overlay;
