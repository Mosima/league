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
    if(teams[0] === " "){
      teams.shift()
    }
    //sorting according to points
    teams.sort((teamA, teamB)=> (teamA.pts > teamB.pts ? -1: 1))

    //sorting according to goal difference
    // for(let x = 0; x < teams.length; x++){
    //   if(teams[x].pts === teams[x+1].pts){
    //       console.log(`${teams[x]} and ${teams[x+1]}`)
    //   }
    // }
    teams.forEach(function (arrayItem) {
    var x = arrayItem.pts;
    console.log(x);
});
  }

  let sortByGoalDiff = () => {
    let len = teams.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
          
            if (teams[i] > teams[i + 1]) {
                let tmp = teams[i];
                teams[i] = teams[i + 1];
                teams[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return teams;
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
