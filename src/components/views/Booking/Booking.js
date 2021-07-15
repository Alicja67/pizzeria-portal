import React from 'react';
import styles from './Booking.module.scss';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  
  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      <p>{`Booking id is: ${id}`}</p>
    </div>
  );
};

export default Booking;
