import React from "react";
import QRCodeDisplay from "../components/QRCodeDisplay";
import styles from "../pages/registractionsuccess.module.css"; // ✅ link to CSS file

export default function RegistrationSuccess() {
  const eventId = "event123";
  const userEmail = "test@example.com";

  return (
    <section className = {styles.registration_success}>
      <h1 className ={styles.success_title}>🎉 Registration Successful!</h1>
      <p className = {styles.success_message}>
        Thank you for registering! Your event QR code is below.
      </p>
      <div className = {styles.qr_container}>
        <QRCodeDisplay eventId={eventId} userEmail={userEmail} />
      </div>
    </section>
  );
}
