import vidData from "../../constants/video_data.json";
import GridItem from "../GridItem";
import styles from "./styles.module.scss";

const Grid = ({ setActiveGallery }) => {
  return (
    <div>
      <ul className={styles.grid}>
        {[...Array(12)].map((_, i) => {
          return (
            <li key={i}>
              <GridItem data={vidData[i * 3]} onClick={setActiveGallery} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Grid;
