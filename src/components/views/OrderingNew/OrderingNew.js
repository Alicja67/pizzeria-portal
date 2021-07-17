import React from 'react';
import styles from './OrderingNew.module.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

const demoMenu = [
  { id: 'Pizza', price: 20 },
  { id: 'Cake', price: 9 },
  { id: 'Breakfast', price: 9 },
  { id: 'Salad', price: 9 },
];

const pizzaOption = [
  { id: 'standard crust', price: 0 },
  { id: 'thick crust', price: 2 },
  { id: 'thin crust', price: 2 },
  { id: 'cheese', price: 5 },
  { id: 'wholewheat', price: 3 },
  { id: 'gluten', price: 0 },
];

const saladOption = [
  { id: 'cucumber', price: 1 },
  { id: 'tomatoes', price: 1 },
  { id: 'olives', price: 1 },
  { id: 'feta', price: 1 },
  { id: 'herbs', price: 1 },
  { id: 'pepper', price: 1 },
];

const OrderingNew = () => {
  const [table, setTable] = React.useState('');
  const [menu, setMenu] = React.useState([]);
  const [pizzaOptions, setPizzaOptions] = React.useState([]);
  const [saladOptions, setSaladOptions] = React.useState([]);

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  const handleMenuChange = (event) => {
    setMenu(event.target.value);
  };

  const handlePizzaOptions = (event) => {
    setPizzaOptions(event.target.value);
  };

  const handleSaladOptions = (event) => {
    setSaladOptions(event.target.value);
  };

  return (
    <Paper className={styles.component}>
      <h2>New order</h2>
      <form className={styles.form}>
        <FormControl >
          <InputLabel id="table">Table</InputLabel>
          <Select
            value={table}
            onChange={handleTableChange}
            label="Table"
            labelId="table"
            id="table"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="menu">Menu</InputLabel>
          <Select
            labelId="menu"
            id="menu"
            multiple
            value={menu}
            onChange={handleMenuChange}
            renderValue={(selected) => selected.join(', ')}
          >
            {demoMenu.map(data => (
              <MenuItem key={data.id} value={data.id}>
                <Checkbox checked={menu.indexOf(data.id) > -1} />
                <ListItemText primary={data.id} secondary={data.price + '$'} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="pizzaOptions">Pizza options</InputLabel>
          <Select
            labelId="pizzaOptions"
            id="pizzaOptions"
            multiple
            value={pizzaOptions}
            onChange={handlePizzaOptions}
            renderValue={(selected) => selected.join(', ')}
          >
            {pizzaOption.map(data => (
              <MenuItem key={data.id} value={data.id} >
                <Checkbox checked={pizzaOptions.indexOf(data.id) > -1} />
                <ListItemText primary={data.id} secondary={data.price + '$'} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="saladOptions">Salad options</InputLabel>
          <Select
            labelId="saladOptions"
            id="saladOptions"
            multiple
            value={saladOptions}
            onChange={handleSaladOptions}
            renderValue={(selected) => selected.join(', ')}
          >
            {saladOption.map(data => (
              <MenuItem key={data.id} value={data.id} >
                <Checkbox checked={saladOptions.indexOf(data.id) > -1} />
                <ListItemText primary={data.id} secondary={data.price + '$'} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained">Confirm order</Button>
      </form>
    </Paper>
  );
};

export default OrderingNew;
