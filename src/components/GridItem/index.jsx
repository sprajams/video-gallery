import styles from "./styles.module.scss";

const GridItem = ({ data, onClick }) => {
  console.log(data);

  return (
    <div>
      <div onClick={() => onClick(true)} className={styles.imgWrap}>
        <img
          className={styles.img}
          src={data.thumbnail}
          alt="placeholder"
        ></img>
      </div>
    </div>
  );
};

export default GridItem;
