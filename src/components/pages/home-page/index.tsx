import { Link } from "react-router";
import { LINK_SOSMED } from "../../../common/constants/link-sosmed";
import Button from "../../atoms/button";
import styles from "./home-page.module.css";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World!</h1>
        <span className={styles.subtitle}>Thanks For Using This Template!</span>
        <p className={styles.text}>If you have something to ask, please don{"'"}t hesitate to contact me at</p>
        <div className={styles.buttonGroup}>
          <Button>
            <Link to={LINK_SOSMED.GITHUB} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github className={styles.icon} /> My Github
            </Link>
          </Button>
          <Button>
            <Link to={LINK_SOSMED.LINKEDIN} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Linkedin className={styles.icon} /> Linkedin
            </Link>
          </Button>
          <Button>
            <Link to={LINK_SOSMED.INSTAGRAM} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Instagram className={styles.icon} /> Instagram
            </Link>
          </Button>
          <Button>
            <Link to={LINK_SOSMED.TWITTER} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Twitter className={styles.icon} /> Twitter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
