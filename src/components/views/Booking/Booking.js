import React from 'react';
import styles from './Booking.module.scss';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>{`Booking id: ${id}`}</h2>
      
    </div>
  );
};

export default Booking;
