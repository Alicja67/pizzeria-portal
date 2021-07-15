import React from 'react';
import styles from './Events.module.scss';
import { useParams } from 'react-router-dom';

const Events = () => {
  const { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>Events view</h2>
      <p>{`Event id is: ${id}`}</p>
    </div>
  );
};

export default Events;
