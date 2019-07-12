import React from "react";
import { Table } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1),
    width: '350px'
  }
}));

const tableHeaders = ["#", "Team", "Pl", "GD", "L", "W", "Pts"];

export default function TableClass(props) {
  const classes = useStyles();
  const { team, date } = props;

  return (
    <div>
      <Table
        responsive
        style={{ backgroundColor: "white", paddingBottom: "-10" }}
      >
        <thead>
          <tr>
            {tableHeaders.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {//"teamName":teamName,"played": pl,"gd": goalDiff,"win": win,"lose": lose, "pts": pts
          team.map((team, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className={"teamName"}>{team.teamName}</td>
              <td>{team.played}</td>
              <td>{team.gd}</td>
              <td>{team.lose}</td>
              <td>{team.win}</td>
              <td>{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={"time"}>
      
      {!date? null
        :
        <Paper className={classes.root}>
          <Typography component="p">
            Last updated : {moment(date).format('MMM Do YYYY, h:mm:ss a')}
          </Typography>
        </Paper>
      }
      </div>
    </div>
  );
}
