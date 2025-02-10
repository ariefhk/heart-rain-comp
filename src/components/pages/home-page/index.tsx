import { HeartRain, HeartRainWrapper } from "../../atoms/heart-rain";
import styles from "./home-page.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeartRainWrapper>
        <HeartRain />
      </HeartRainWrapper>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World!</h1>
      </div>
    </div>
  );
};

export default HomePage;
