import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then(res => res.json())
      .then(setEvent)
      .catch(console.error);
  }, [id]);

  if (!event) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.date}</p>
      <p className="mb-6">{event.description}</p>
      <Link to={`/events/${id}/chat`} className="text-primary font-semibold hover:underline">
        Join Chat
      </Link>
    </div>
  );
}
