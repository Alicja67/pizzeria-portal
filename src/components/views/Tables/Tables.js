// import React from 'react';
// import styles from './Tables.module.scss';
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';

// const Tables = () => {
//   return (
//     <div className={styles.component}>
//       <h2 className={styles.title}>Tables view</h2>
//       <nav className={styles.nav}>
//         <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/book/123`}>Booking</Button>
//         <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Button>
//         <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/event/123`}>Events</Button>
//         <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>
//       </nav>
//     </div>
//   );
// };

// export default Tables;

import React from 'react';
import styles from './Tables.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


const demoContent = [
  {hour: '12:00', status: 'FREE'},
  {hour: '12:30', status: 'BOOKED'},
  {hour: '13:00', status: 'BOOKED'},
  {hour: '13:30', status: 'FREE'},
  {hour: '14:00', status: 'BOOKED'},
  {hour: '14:30', status: 'BOOKED'},
  {hour: '15:00', status: 'FREE'},
  {hour: '15:30', status: 'FREE'},
  {hour: '16:00', status: 'FREE'},
  {hour: '16:30', status: 'FREE'},
  {hour: '17:00', status: 'FREE'},
  {hour: '17:30', status: 'FREE'},
  {hour: '18:00', status: 'FREE'},
  {hour: '18:30', status: 'FREE'},
  {hour: '19:00', status: 'FREE'},
  {hour: '19:30', status: 'FREE'},
  {hour: '20:00', status: 'FREE'},
  {hour: '20:30', status: 'FREE'},
  {hour: '21:00', status: 'FREE'},
  {hour: '21:30', status: 'FREE'},
  {hour: '22:00', status: 'FREE'},
  {hour: '22:30', status: 'FREE'},
  {hour: '23:00', status: 'FREE'},
  {hour: '23:30', status: 'FREE'},

];

const renderActions = status => {
  switch (status) {
    case 'FREE':
      return (
        <>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>new booking</Button>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>new event</Button>
        </>
      );
    case 'BOOKED':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/book/123`}>edit booking</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <TextField
      className={styles.date}
      id="date"
      label="Date"
      type="date"
      defaultValue="2021-07-15"
      InputLabelProps={{
        shrink: true,
      }}
    />
    <Paper className={styles.component}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.tableHead}>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                <div className={styles.statusTitle}>
                  <h3>{row.status}</h3>
                  {renderActions(row.status)}
                  {renderActions(row.event)}
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.statusTitle}>
                  <h3>{row.status}</h3>
                  {renderActions(row.status)}
                  {renderActions(row.event)}
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.statusTitle}>
                  <h3>{row.status}</h3>
                  {renderActions(row.status)}
                  {renderActions(row.event)}
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.statusTitle}>
                  <h3>{row.status}</h3>
                  {renderActions(row.status)}
                  {renderActions(row.event)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
