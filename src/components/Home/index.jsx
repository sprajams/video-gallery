import { useState, useEffect } from "react";
import Grid from "../Grid";
import Profile from "../Profile";
import Modal from "../Modal";
import styles from "./styles.module.scss";
import clsx from "clsx";

const MODAL_DATA = [
  {
    key: "favorite",
    title: "Favorite",
    icon: (
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
    ),
  },
  {
    key: "mute",
    title: "Mute",
    icon: (
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
    ),
  },
  {
    key: "report",
    title: "Report",
    icon: (
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
    ),
  },
  { key: "unfollow", title: "Unfollow" },
];

const Home = ({ dataSnippet, setActiveGallery, setInitialIndex }) => {
  // TODO: condense logic of toggling various option states
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  // .... object with keys set to false to use as initial useState
  const initialModalState = MODAL_DATA.reduce((acc, curr) => {
    const { key } = curr;
    return { ...acc, [key]: false };
  }, {});
  const [modalState, setModalState] = useState(initialModalState);
  // helper function to update one key at a time
  const toggleModalState = (key) => {
    setModalState((curr) => {
      return { ...curr, [key]: !curr[key] };
    });
  };

  const onClickFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
    }
    setIsFollowing(!isFollowing);
  };

  const onClickOptions = () => {
    setActiveModal(!activeModal);
  };

  // if unfollowed, close modal and reset unfollow
  useEffect(() => {
    if (modalState.unfollow) {
      toggleModalState("unfollow");
      setActiveModal(false);
      setIsFollowing(false);
    }
  }, [modalState.unfollow]);

  const onClickHome = () => {
    setActiveGallery(true);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.header}>
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
      </div>
      <Profile
        onClickOptions={onClickOptions}
        isFollowing={isFollowing}
        onClickFollow={onClickFollow}
      />
      {activeModal && (
        <div className={styles.modal}>
          <Modal
            setActiveModal={setActiveModal}
            data={MODAL_DATA}
            modalState={modalState}
            toggleModalState={toggleModalState}
          />
        </div>
      )}
      <Grid
        dataSnippet={dataSnippet}
        setActiveGallery={setActiveGallery}
        setInitialIndex={setInitialIndex}
      />
    </div>
  );
};

export default Home;
