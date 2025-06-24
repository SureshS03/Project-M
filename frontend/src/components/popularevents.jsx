import React from 'react';
import styles from './popularevents.module.css';

const dummyEvents = [
  {
    id: 1,
    title: 'AI Meetup',
    date: 'July 5, 2025',
    location: 'Chennai',
    image: '/images/event1.png',
  },
  {
    id: 2,
    title: 'Hackathon 2025',
    date: 'July 10, 2025',
    location: 'Bangalore',
    image: '/images/event2.png',
  },
  {
    id: 3,
    title: 'Tech Conference',
    date: 'August 2, 2025',
    location: 'Mumbai',
    image: '/images/event3.png',
  },
  {
    id: 4,
    title: 'Startup Pitch Fest',
    date: 'August 15, 2025',
    location: 'Hyderabad',
    image: '/images/event4.png',
  },
];

const PopularEvents = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Popular Events</h1>
      <p className={styles.subheading}>
        Discover trending events happening around you.
      </p>
      <div className={styles.grid}>
        {dummyEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.image} alt={event.title} className={styles.image} />
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.date}>{event.date}</p>
            <p className={styles.location}>{event.location}</p>
            <div className={styles.buttons}>
              <button className={styles.viewBtn}>View Event</button>
              <button className={styles.joinBtn}>Join</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;
