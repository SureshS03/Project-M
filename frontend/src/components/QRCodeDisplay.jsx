import React from 'react';
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeDisplay({ eventId, userEmail})
// content inside the QR
{
    const qrValue = `${eventId},${userEmail}`;

    return (
        <div style={{ textAlign: "center", marginTop: "20px"}}>
            <h2>Your Event QR Code</h2>
            <QRCodeCanvas value={qrValue} size={256} />
            <p> Scan this at the event enterance</p>
        </div>
    );
}