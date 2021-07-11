import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from'../src/components/views/HomePage/HomePage';
import Login from '../src/components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import BookingNew from './components/views/BookingNew/BookingNew';
import Events from './components/views/Events/Events';
import EventsNew from './components/views/EventsNew/EventsNew';
import Waiter from '../src/components/views/Waiter/Waiter';
import Ordering from './components/views/Ordering/Ordering';
import OrderingNew from './components/views/OrderingNew/OrderingNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11cb5f',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/book/:id`} component={Booking} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/event/:id`} component={Events} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/ordering/order/:id`} component={Ordering} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/ordering/new`} component={OrderingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
