import React, { useEffect, useState } from 'react';
import EventCard from '../components/eventcard';

export default function Explore() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(ev => <EventCard key={ev.id} event={ev} />)}
      </div>
    </section>
  );
}
