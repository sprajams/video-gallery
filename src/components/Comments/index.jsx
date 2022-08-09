import styles from "./styles.module.scss";

const Comments = ({ setActiveComments, onSlideClose }) => {
  const onClickClose = () => {
    onSlideClose();
    setActiveComments(false);
  };
  const randomID = Math.floor(Math.random() * 20);
  return (
    <div className={styles.outer}>
      <button onClick={onClickClose} className={styles.closeBtn}>
        <div className={styles.closeIcon}>
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
        </div>
      </button>
      <ul className={styles.wrap}>
        <li className={styles.comment}>
          <div className={styles.commentImg}>
            <img
              src={`https://placedog.net/45/45?id=${randomID + 1}`}
              loading="lazy"
              alt="random dog profile pic"
            />
          </div>
          <div className={styles.commentText}>
            <h3 className={styles.userName}>User Name</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              et dolore magna aliqua."
            </p>
          </div>
        </li>
        <li className={styles.comment}>
          <div className={styles.commentImg}>
            <img
              src={`https://placedog.net/45/45?id=${randomID + 2}`}
              alt="random dog profile pic"
              loading="lazy"
            />
          </div>
          <div className={styles.commentText}>
            <h3 className={styles.userName}>User Name</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
            </p>
          </div>
        </li>
        <li className={styles.comment}>
          <div className={styles.commentImg}>
            <img
              src={`https://placedog.net/45/45?id=${randomID + 3}`}
              alt="random dog profile pic"
              loading="lazy"
            />
          </div>
          <div className={styles.commentText}>
            <h3 className={styles.userName}>User Name</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod aliqua."
            </p>
          </div>
        </li>
        <li className={styles.comment}>
          <div className={styles.commentImg}>
            <img
              src={`https://placedog.net/45/45?id=${randomID + 4}`}
              alt="random dog profile pic"
              loading="lazy"
            />
          </div>
          <div className={styles.commentText}>
            <h3 className={styles.userName}>User Name</h3>
            <p>
              "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua."
            </p>
          </div>
        </li>
        <li className={styles.comment}>
          <div className={styles.commentImg}>
            <img
              src={`https://placedog.net/45/45?id=${randomID + 5}`}
              alt="random dog profile pic"
              loading="lazy"
            />
          </div>
          <div className={styles.commentText}>
            <h3 className={styles.userName}>User Name</h3>
            <p>
              "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              aliqua."
            </p>
          </div>
        </li>
        <li className={styles.comment}>
          <div className={styles.commentImg}>
            <img
              src={`https://placedog.net/45/45?id=${randomID + 6}`}
              alt="random dog profile pic"
              loading="lazy"
            />
          </div>
          <div className={styles.commentText}>
            <h3 className={styles.userName}>User Name</h3>
            <p>
              "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              aliqua."
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
