import styles from "./styles.module.scss";
import clsx from "clsx";

const Modal = ({ setActiveModal, data, modalState, toggleModalState }) => {
  const toCloseModal = () => {
    setActiveModal(false);
  };
  return (
    <div className={styles.outer}>
      <div className={styles.outside} onClick={toCloseModal}></div>
      <ul className={styles.wrap}>
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
        {data.length > 0 &&
          data.map((option, i) => {
            const status = modalState[option.key];
            const onClick = () => {
              toggleModalState(option.key);
            };
            return (
              <li className={styles.option} key={option.key}>
                {option.icon && <div>{option.title}</div>}
                <button
                  className={clsx(
                    styles.btn,
                    option.icon ? styles.btnIcon : styles.btnText,
                    status && styles.active
                  )}
                  onClick={onClick}
                >
                  {option.icon ? option.icon : option.title}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Modal;
