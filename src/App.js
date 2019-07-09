import React from 'react';
import './assets/css/App.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

import Table from './components/Table'
import AppBar from './components/AppBar'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar/>
      <Container maxWidth="lg">
        
        <Table/>
      </Container>
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon> create </Icon>
      </Fab>
    </div>
  );
}

export default App;
