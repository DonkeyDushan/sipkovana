import React from 'react';
import { Grid } from '@mui/material';
import { StarterButton } from 'app/components';
import styles from './index.module.css';

export const MainPage = () => {
  return (
    <Grid container className={styles.starterWrapper}>
      React starter
      <StarterButton />
    </Grid>
  );
};
