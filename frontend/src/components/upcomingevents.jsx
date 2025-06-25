import React from 'react';
import styles from './upcomingevents.module.css';

const upcomingEvents = [
  {
    id: 1,
    title: 'Cloud Computing Bootcamp',
    date: 'July 20, 2025',
    location: 'Online',
    image: '/images/upcoming1.png',
  },
  {
    id: 2,
    title: 'Women in Tech Summit',
    date: 'August 5, 2025',
    location: 'Delhi',
    image: '/images/upcoming2.png',
  },
  {
    id: 3,
    title: 'React Conf 2025',
    date: 'August 18, 2025',
    location: 'San Francisco',
    image: '/images/upcoming3.png',
  },
  {
    id: 4,
    title: 'Cybersecurity Challenge',
    date: 'September 1, 2025',
    location: 'Chennai',
    image: '/images/upcoming4.png',
  },
];

export default function UpcomingEvents() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Upcoming Events</h2>
      <p className={styles.subheading}>Get ready for the next big thing!</p>
      <div className={styles.grid}>
        {upcomingEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.image} alt={event.title} className={styles.image} />
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.date}>{event.date}</p>
            <p className={styles.location}>{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
