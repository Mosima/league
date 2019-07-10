import React from 'react';
import { Table } from 'reactstrap';

const tableHeaders = ['#', 'Team', 'Pl', 'GD', 'L', 'W', 'Pts']
export default class Example extends React.Component {
  
  render() {
    const { team } = this.props;
    return (
      <Table responsive style={{backgroundColor: "white", marginTop: "60px"}}>
        <thead>
          <tr>
            {tableHeaders.map((head, index)=><th key={index}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            //"teamName":teamName,"played": pl,"gd": goalDiff,"win": win,"lose": lose, "pts": pts
            team.map((team, index)=>
            (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{team.teamName}</td>
                <td>{team.played}</td>
                <td>{team.gd}</td>
                <td>{team.lose}</td>
                <td>{team.win}</td>
                <td>{team.pts}</td>
              </tr>
             ))
          }
        </tbody>
      </Table>
    );
  }
}