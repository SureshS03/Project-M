import React from "react";
import QRCodeDisplay from "../components/QRCodeDisplay";

export default function RegistrationSuccess() {
    

    const eventId = "event123";
    const userEmail = "test@example.com";

    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Registration Successful!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Thank you for registering! Your event details are below.
            </p>
            <QRCodeDisplay eventId={eventId} userEmail={userEmail} />
        </section>
    );
}