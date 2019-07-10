import React, { useState, useEffect  }  from 'react';
import './assets/css/App.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { Button } from 'reactstrap';

import Table from './components/Table'
import AppBar from './components/AppBar'
import TeamModal from './components/TeamModal'

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
  const [team, setTeam] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [isOpen, setOpen] = useState(false);

  const toggle = () =>{
    setOpen(!isOpen)
  }

  const addTeam = (teamName, pl, goalA, goalF, win, lose) =>{
    let teams = []
    teams.push([teamName, pl, goalA, goalF, win, lose])
    console.log(teams)
  }

  return (
    <div className="App">
      <AppBar/>
      <Container maxWidth="lg">
        <Table team={"Team 1"} pl={16} goalA={30} goalF={20} win={5} lose={9}/>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={toggle}>
          <AddIcon />
        </Fab>
        <TeamModal isOpen={isOpen} toggle={toggle} addTeam={addTeam}/>
      </Container>
    </div>
  );
}

export default App;
