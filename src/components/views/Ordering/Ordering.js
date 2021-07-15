import React from 'react';
import styles from './Ordering.module.scss';
import { useParams } from 'react-router-dom';


const Ordering = () => {
  const { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>Ordering view</h2>
      <p>{`Order id is: ${id}`}</p>

    </div>
  );
};

export default Ordering;
