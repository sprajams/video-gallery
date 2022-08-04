import styles from "./styles.module.scss";

const GridItem = ({ data }) => {
  return (
    <div className={styles.imgWrap}>
      <img className={styles.img} src={data} alt="placeholder"></img>
    </div>
  );
};

export default GridItem;
