import vidData from "../../constants/video_data.json";
import GridItem from "../GridItem";
import styles from "./styles.module.scss";

const Grid = ({ setActiveGallery, setActiveIndex }) => {
  return (
    <div>
      <ul className={styles.grid}>
        {[...Array(12)].map((_, i) => {
          const onClick = () => {
            setActiveIndex(i);
            setActiveGallery(true);
          };
          return (
            <li key={i} onClick={onClick}>
              <GridItem index={i} data={vidData[i * 3]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Grid;
