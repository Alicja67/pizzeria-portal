import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Tables view</h2>
      <nav className={styles.nav}>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/book/123`}>Booking</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/event/123`}>Events</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>
      </nav>
    </div>
  );
};

export default Tables;
