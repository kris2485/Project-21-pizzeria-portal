import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Events id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
  </div>
);

export default Tables;
