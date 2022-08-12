import styles from "./styles.module.scss";
import clsx from "clsx";

const Modal = ({
  setOpenOptions,
  isFollowing,
  favorite,
  onClickFav,
  toUnfollow,
  mute,
  toMute,
  report,
  toReport,
}) => {
  const toCloseModal = () => {
    setOpenOptions(false);
  };
  return (
    <div className={styles.outer}>
      <div className={styles.outside} onClick={toCloseModal}></div>
      <ul className={styles.wrap} onClick={() => console.log("inside")}>
        <button
          onClick={toCloseModal}
          className={clsx(styles.btn, styles.btnClose)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <li className={clsx(styles.option, styles.title)}>
          <h3>Kona</h3>
        </li>
        <li className={styles.option}>
          <div>{favorite ? "Favorited" : "Add to favorites"}</div>
          <button
            className={clsx(
              styles.btn,
              styles.btnIcon,
              favorite && styles.favorite
            )}
            onClick={onClickFav}
          >
            {/* sparkle icon  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li className={styles.option}>
          <div>Mute</div>
          <button
            className={clsx(styles.btn, styles.btnIcon, mute && styles.muted)}
            onClick={toMute}
          >
            {/* sparkle icon  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        {isFollowing ? (
          <li className={styles.option}>
            <button
              className={clsx(styles.btn, styles.unfollowBtn)}
              onClick={toUnfollow}
            >
              <div>Unfollow</div>
            </button>
          </li>
        ) : (
          <li className={styles.option}>
            <div>Report</div>
            <button
              className={clsx(
                styles.btn,
                styles.btnIcon,
                report && styles.reported
              )}
              onClick={toReport}
            >
              {/* flag icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Modal;
