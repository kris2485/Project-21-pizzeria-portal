import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <Paper className={styles.component}>
    <TextField id='standard-password-input' label='Login' type='Login' autoComplete='current-password' />
    <TextField id='standard-password-input' label='Password' type='password' autoComplete='current-password' />
    <Button className={styles.button} variant='outlined' color='primary'>
      Sign in
    </Button>
  </Paper>
);
export default Login;
