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
  {
    id: 5,
    title: 'Cloud Expo India',
    date: 'September 1, 2025',
    location: 'Delhi',
    image: '/images/event5.png',
  },
  {
    id: 6,
    title: 'React Summit',
    date: 'September 10, 2025',
    location: 'Pune',
    image: '/images/event6.png',
  },
  {
    id: 7,
    title: 'Open Source Meetup',
    date: 'October 5, 2025',
    location: 'Kolkata',
    image: '/images/event7.png',
  },
  {
    id: 8,
    title: 'Data Connect 2025',
    date: 'October 20, 2025',
    location: 'Ahmedabad',
    image: '/images/event8.png',
  },
];

const PopularEvents = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Explore Popular Events in <span className={styles.city}>Chennai, IN</span></h1>
        
      </div>
      <div className={styles.grid}>
        {dummyEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.image} alt={event.title} className={styles.image} />
            <div className={styles.details}>
              <h3 className={styles.title}>{event.title}</h3>
              <p className={styles.host}>Hosted by: Tech Community</p>
              <p className={styles.date}>{event.date}</p>
              <p className={styles.location}>{event.location}</p>
              <div className={styles.footer}>
                <span>100 going</span>
                <span> Free</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;
