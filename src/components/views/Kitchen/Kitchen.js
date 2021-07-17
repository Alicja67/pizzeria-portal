import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const demoContent = [
  {id: '1', table: 1, hour: '13:00', order: ['Pizza'] },
  {id: '2', table: 2, hour: '13:15', order: ['Salad', 'Water'] },
  {id: '3', table: 4, hour: '13:30', order: ['Pizza', 'Salad'] },
  {id: '4', table: 4, hour: '13:50', order: ['Pasta'] },
];

const Kitchen = () => {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.component}>
      <h2>Kitchen</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order time</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row">
                  {row.hour}
                </TableCell>
                <TableCell>
                  {row.table}
                </TableCell>
                <TableCell>
                  {row.order.join(', ')}
                </TableCell>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Is finished?"
                  />
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Kitchen;
