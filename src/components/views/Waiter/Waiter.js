import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Waiter view</h2>
      <nav className={styles.nav}>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/ordering/order/abc`} >Order</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/ordering/new`} >New Order</Button>
      </nav>
    </div>
  );
};

export default Waiter;
