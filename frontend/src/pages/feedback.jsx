import React, { useState } from 'react';

export default function Feedback() {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
      .then(() => alert('Thanks for your feedback!'))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={6}
        className="w-full border p-2 rounded mb-4"
        placeholder="Your thoughts..."
      />
      <button type="submit" className="px-6 py-2 bg-accent text-white rounded-lg">Submit</button>
    </form>
  );
}
