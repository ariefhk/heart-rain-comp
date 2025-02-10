import Button from "../../../atoms/button";
import styles from "./error-404-page.module.css";
import { useNavigate } from "react-router";

export default function Error404Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <span className={styles.message}>Ups! Halaman Tidak Ditemukan!</span>
        <p className={styles.description}>
          Kelihatannya halaman yang kamu cari tidak Ada <br />
          Atau sudah dihapus deh.
        </p>
        <div className={styles.buttonGroup}>
          <Button onClick={() => navigate(-1)}>Kembali</Button>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    </div>
  );
}
