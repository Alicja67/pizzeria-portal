import React from 'react';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button component={NavLink} className={styles.link} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
      <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
      <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
      <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
    </nav>
  );
};

export default PageNav;
