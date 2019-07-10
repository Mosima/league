import React, { useState }  from 'react';
import './assets/css/App.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

let teams = [" "]

function App() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggle = () =>{
    setOpen(!isOpen)
  }
  
  //input data from the manager
  const addTeam = (teamName, pl, goalFor, goalAg, win, lose) =>{
    //points and goal differences calculation
    let pts = parseInt(win) * 3;
    let goalDiff = parseInt(goalFor) - parseInt(goalAg);

    //table array
    teams = [...teams, {"teamName":teamName,"played": pl,"gd": goalDiff,"win": win,"lose": lose, "pts": pts}]
    filterTeams()
  }
  
  const filterTeams = () =>{
    //delete initialized array
    // delete teams[0]
    if(teams[0] === " "){
      teams.shift()
    }

    //sorting according to points
    teams.sort((teamA, teamB)=> (teamA.pts > teamB.pts ? -1: 1))
    
  }
  return (
    
    <div className="App">
      <AppBar/>
      <Container maxWidth="lg">
        <Table team={teams}/>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={toggle}>
          <AddIcon />
        </Fab>
        <TeamModal isOpen={isOpen} toggle={toggle} addTeam={addTeam} teamLength={teams.length}/>
      </Container>
    </div>
  );
}

export default App;
