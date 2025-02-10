import Button from "../../../atoms/button";
import styles from "./error-401-page.module.css";
import { useNavigate } from "react-router";

export default function Error401Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>401</h1>
        <span className={styles.message}>Ups! Kamu Tidak Memiliki Akses!</span>
        <p className={styles.description}>
          Halaman yang akan kamu akses diblokir <br />
          Sepertinya kamu tidak diberi akses!.
        </p>
        <div className={styles.buttonGroup}>
          <Button onClick={() => navigate(-1)}>Kembali</Button>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    </div>
  );
}
