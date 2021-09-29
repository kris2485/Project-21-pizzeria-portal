import React from 'react';
import styles from './BookedEvents.module.scss';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = {
  date: '2021-06-21',
  table: '2',
  time: '18:00',
  duration: '4',
  ppl: '10',
};

const BookedEvents = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.table}>
              <h3>Event no. 7</h3>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.table}>Table</TableCell>
            <TableCell className={styles.table}>{demoContent.table}</TableCell>
            <TableCell>
              <Button className={styles.button} variant='contained'>
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.table}>Date</TableCell>
            <TableCell className={styles.table}>{demoContent.date}</TableCell>
            <TableCell>
              <Button className={styles.button} variant='contained'>
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.table}>Time</TableCell>
            <TableCell className={styles.table}>{demoContent.time}</TableCell>
            <TableCell>
              <Button className={styles.button} variant='contained'>
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.table}>Duration</TableCell>
            <TableCell className={styles.table}>{demoContent.duration}</TableCell>
            <TableCell>
              <Button className={styles.button} variant='contained'>
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.table}>People</TableCell>
            <TableCell className={styles.table}>{demoContent.ppl}</TableCell>
            <TableCell>
              <Button className={styles.button} variant='contained'>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
  );
};
export default BookedEvents;
