import Button from "../../../atoms/button";
import styles from "./error-500-page.module.css";
import { useNavigate } from "react-router";

export default function Error500Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>500</h1>
        <span className={styles.message}>Ups! Terjadi Kesalahan!</span>
        <p className={styles.description}>
          Kelihatannya halaman yang kamu akses <br />
          sedang mengalami masalah.
        </p>
        <div className={styles.buttonGroup}>
          <Button onClick={() => navigate(-1)}>Kembali</Button>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    </div>
  );
}
