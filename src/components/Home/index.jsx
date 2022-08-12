import { useState } from "react";
import Grid from "../Grid";
import Modal from "../Modal";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Home = ({ dataSnippet, setActiveGallery, setInitialIndex }) => {
  // TODO: condense logic of toggling various option states
  const [isFollowing, setIsFollowing] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [alert, setAlert] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [mute, setMute] = useState(false);
  const [report, setReported] = useState(false);

  const onClickFav = () => {
    if (!favorite) {
      setFavorite(true);
      setIsFollowing(true);
    }
    setFavorite(!favorite);
  };

  const onClickFollow = () => {
    if (isFollowing) {
      setFavorite(false);
      setIsFollowing(false);
      setMute(false);
      setReported(false);
    }
    setIsFollowing(!isFollowing);
  };

  const onClickOptions = () => {
    setOpenOptions(!openOptions);
  };

  const toggleAlert = () => {
    setAlert(!alert);
  };

  const onClickHome = () => {
    setActiveGallery(true);
  };

  // unfollowing will close the modal, and reset options
  const toUnfollow = () => {
    setOpenOptions(false);
    onClickFollow();
  };

  const toMute = () => {
    setMute(!mute);
  };
  const toReport = () => {
    setReported(!report);
  };

  return (
    <div className={clsx(styles.outer, openOptions && styles.fixed)}>
      <button
        className={clsx(styles.btn, styles.backBtn)}
        onClick={onClickHome}
      >
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
      <h2 className={styles.username}>@Kona</h2>
      <div className={clsx(styles.inner, openOptions && styles.fixed)}>
        <div className={styles.profile}>
          <div className={styles.profileTopWrap}>
            <div className={styles.profilePic}>
              <img
                src={"/images/kProfilePicSmall.jpeg"}
                alt="Kona's profile pic"
              />
            </div>
            <div className={styles.profileStats}>
              <div className={styles.statsWrap}>
                <span>240</span>
                Following
              </div>
              <div className={styles.statsWrap}>
                <span>225</span>
                Followers
              </div>
              <div className={styles.statsWrap}>
                <span>12</span>
                Videos
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={clsx(
                styles.btn,
                styles.btnFollow,
                isFollowing && styles.active
              )}
              onClick={onClickFollow}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <div className={styles.smallBtnWrap}>
              <button
                className={clsx(styles.btn, styles.btnIcon)}
                onClick={onClickOptions}
              >
                {/* down icon */}
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              {isFollowing && (
                <button
                  className={clsx(styles.btn, styles.btnIcon)}
                  onClick={toggleAlert}
                >
                  {/* alert bell icon */}
                  <div className={clsx(styles.icon, alert && styles.btnAlert)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>
          <div className={styles.profileBio}>
            Just a small brown girl. Livin' in a lonely world. She took the
            midnight train going anywhere.
            <br />
            Follow for more content!
          </div>
        </div>
        {openOptions && (
          <div className={styles.modal}>
            <Modal
              setOpenOptions={setOpenOptions}
              setIsFollowing={setIsFollowing}
              isFollowing={isFollowing}
              onClickFav={onClickFav}
              favorite={favorite}
              toUnfollow={toUnfollow}
              toMute={toMute}
              mute={mute}
              report={report}
              toReport={toReport}
            />
          </div>
        )}
        <Grid
          dataSnippet={dataSnippet}
          setActiveGallery={setActiveGallery}
          setInitialIndex={setInitialIndex}
        />
      </div>
    </div>
  );
};

export default Home;
