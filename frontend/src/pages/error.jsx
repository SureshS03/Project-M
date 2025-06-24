import React from "react";
import styles from "./error.module.css";
export default function ErrorPage() {
  return (
    <div className={styles.error_container}>
      <h1 id={styles.text_error}>404 - Page Not Found</h1>
      <p id={styles.text_error}>The page you are looking for doesn't exist and peenarverse .</p>
    </div>
  );
}
