import React from 'react';
import styles from './categories.module.css';

const categories = [
  { name: 'Travel and Outdoor', icon: '🌲' },
  { name: 'Social Activities', icon: '🎉' },
  { name: 'Hobbies and Passions', icon: '🧩' },
  { name: 'Sports and Fitness', icon: '⚽' },
  { name: 'Health and Wellbeing', icon: '🧘' },
  { name: 'Technology', icon: '💻' },
  { name: 'Art and Culture', icon: '🎭' },
  { name: 'Games', icon: '🎲' }
];

const Categories = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Explore Top Categories</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{category.icon}</div>
            <p className={styles.name}>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
