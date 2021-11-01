import 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const demoContent = [
  {
    hour: '12:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'event' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '13:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'event' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'event' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '14:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '15:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'booked' },
    ],
  },
  {
    hour: '15:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'booked' },
    ],
  },
  {
    hour: '16:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'event' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '16:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'event' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '17:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '17:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '18:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '18:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '19:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '19:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '20:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '20:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '21:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
    ],
  },
];
const renderActions = (status) => {
  switch (status) {
    case 'free':
      return (
        <div>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
            New booking
          </Button>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>
            New Event
          </Button>
        </div>
      );
    case 'booked':
      return (
        <div>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
            Booked
          </Button>
        </div>
      );
    case 'event':
      return (
        <div>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/:id`}>
            Event
          </Button>
        </div>
      );
    default:
      return null;
  }
};

const Tables = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper className={styles.component}>
      <h2 className={styles.title}>DATE AND TIME PICKER</h2>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin='normal'
          id='date-picker-dialog'
          label='Date picker'
          format='dd/MM/yyyy'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin='normal'
          id='time-picker'
          label='Time picker'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
      <h2 className={styles.title}>RESERVATIONS AND EVENTS LIST</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.table}>Time</TableCell>
            <TableCell className={styles.table}>Table 1</TableCell>
            <TableCell className={styles.table}>Table 2</TableCell>
            <TableCell className={styles.table}>Table 3</TableCell>
            <TableCell className={styles.table}>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map((row) => (
            <TableRow key={row.hour}>
              <TableCell component='th' scope='row'>
                {row.hour}
              </TableCell>
              {row.tables.map((table) => (
                <TableCell className={styles.table} key={table.id}>
                  {renderActions(table.status)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
