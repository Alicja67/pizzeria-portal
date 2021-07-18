import React from 'react';
import styles from './HomePage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const HomePage = () => {
  const demoOrders = [
    {id: '1', hour: '13:00', order: ['Pizza'], price: 20, localization: 'local'},
    {id: '2', hour: '13:15', order: ['Salad', 'Water'], price: 9, localization: 'delivery'},
    {id: '3', hour: '13:30', order: ['Pizza', 'Salad'], price: 29, localization: 'local'},
    {id: '4', hour: '13:50', order: ['Pasta'], price: 9, localization: 'local'},
  ];

  const demoRezervations = [
    {rezervationId: 1, hour: '12:30', type: 'booking', table: 1},
    {rezervationId: 2, hour: '13:00', type: 'event', table: 3},
    {rezervationId: 3, hour: '14:00', type: 'booking', table: 2},
    {rezervationId: 4, hour: '18:30', type: 'booking', table: 1},
  ];

  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{`Statistics of today's orders`}</h2>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell align="left">Hour</TableCell>
              <TableCell align="left">Order</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Localization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoOrders.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.hour}</TableCell>
                <TableCell align="left">{row.order.join(', ')}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.localization}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className={styles.title}>List of bookings and events planned for today</h2>

      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Rezervation Id</TableCell>
              <TableCell align="left">Hour</TableCell>
              <TableCell align="left">Table</TableCell>
              <TableCell align="left">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoRezervations.map((row) => (
              <TableRow key={row.rezervationId}>
                <TableCell>
                  {row.rezervationId}
                </TableCell>
                <TableCell align="left">{row.hour}</TableCell>
                <TableCell align="left">{row.table}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
