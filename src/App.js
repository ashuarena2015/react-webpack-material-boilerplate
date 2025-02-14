import React from "react";
import * as styles from "./styles.module.less";
import UserInfo from './components/TodoList';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h5" component="h5">
        Todo Lists
      </Typography>
      <UserInfo />
    </div>
  );
};

export default App;
