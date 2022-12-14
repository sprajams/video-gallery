import GridItem from "../GridItem";
import styles from "./styles.module.scss";

const Grid = ({ dataSnippet, setActiveGallery, setInitialIndex }) => {
  return (
    <div className={styles.outer}>
      <ul className={styles.grid}>
        {dataSnippet.length > 0 &&
          dataSnippet.map((element, i) => {
            const onClick = () => {
              setInitialIndex(i);
              setActiveGallery(true);
            };
            return (
              <li key={i} onClick={onClick}>
                <GridItem index={i} data={element.thumbnail} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Grid;
