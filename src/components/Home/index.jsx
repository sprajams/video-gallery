import Grid from "../Grid";
import styles from "./styles.module.scss";

const Home = ({ dataSnippet, setActiveGallery, setInitialIndex }) => {
  return (
    <div className={styles.outer}>
      <h2 className={styles.username}>@Kona</h2>
      <div className={styles.inner}>
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
          <button className={styles.btnFollow}>Follow</button>
          <div className={styles.profileBio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio
            libero voluptatum. Deleniti id debitis eos.
          </div>
        </div>
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
