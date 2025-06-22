import React, { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(res => res.json())
      .then(setProfile)
      .catch(console.error);
  }, []);

  if (!profile) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-16 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Rank:</strong> #{profile.rank}</p>
      <p><strong>Attendance:</strong> {profile.attended} / {profile.total} events</p>

      {/* Optional: Edit button or form */}
    </div>
  );
}
