import React from 'react';
import styles from './BookedTable.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = {
  date: '2021-06-06',
  table: '1',
  time: '19:00',
  duration: '3',
  ppl: '4',
};

const BookedTable = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.table}>
              <h3>Booking no. 7</h3>
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

export default BookedTable;
