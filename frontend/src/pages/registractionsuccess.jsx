import React from "react";
import QRCodeDisplay from "../components/QRCodeDisplay";
import styles from "../pages/registrationsuccess.module.css";

export default function Registrationsuccess() {
    

    const eventId = "event123";
    const userEmail = "test@example.com";

    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                <h1 className = {styles.h1}>Registration Successful!</h1>
            <p className = {styles.p}>
                Thank you for registering! Your event details are below.
            </p>   
            </div>
            <QRCodeDisplay eventId={eventId} userEmail={userEmail} />
        </section>
    );
}