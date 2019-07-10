
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';



class TeamModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        teamName: '',
        played: 0,
        goalF: 0,
        goalA: 0,
        lose: 0,
        win: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleSubmit(){
        const { teamName, played, goalF, goalA, win, lose } = this.state;
        this.props.addTeam(teamName, played, goalF, goalA, win, lose);
        this.props.toggle();
    }

  render() {
      const closeBtn = <button className="close" onClick={this.props.toggle}>&times;</button>;
      const { teamName, played, goalF, goalA, win, lose } = this.state;

      return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle} close={closeBtn}>Add Team</ModalHeader>
          <ModalBody>
            <Form>
                <Input
                     placeholder="Team Name"
                     onChange={(e)=>{this.setState({teamName: e.target.value})}}
                />
                <br/>
                <Input
                     placeholder="Play"
                     onChange={(e)=>{this.setState({played: e.target.value})}}
                />
                <br/>
                <Input
                     placeholder="Goal Forward"
                     onChange={(e)=>{this.setState({goalF: e.target.value})}}
                />
                <br/>
                <Input
                     placeholder="Goal Against"
                     onChange={(e)=>{this.setState({goalA: e.target.value})}}
                />
                <br/>
                <Input
                     placeholder="Wins"
                     onChange={(e)=>{this.setState({win: e.target.value})}}
                />
                <br/>
                <Input
                     placeholder="Lost"
                     onChange={(e)=>{this.setState({lose: e.target.value})}}
                />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TeamModal;