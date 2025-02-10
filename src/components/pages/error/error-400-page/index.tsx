import Button from "../../../atoms/button";
import styles from "./error-400-page.module.css";
import { useNavigate } from "react-router";

export default function Error400Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>400</h1>
        <span className={styles.message}>Ups! Permintaan Tidak Valid!</span>
        <p className={styles.description}>
          Halaman yang kamu akses tidak dapat ditemukan <br />
          atau permintaan yang kamu kirimkan tidak valid.
        </p>
        <div className={styles.buttonGroup}>
          <Button onClick={() => navigate(-1)}>Kembali</Button>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    </div>
  );
}
