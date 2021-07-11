import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import { AppBar, Toolbar } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const MainLayout = ({ children }) => {
  return (
    <div>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <PageNav />
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Toolbar />
        {children}
      </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
