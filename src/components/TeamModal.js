import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormFeedback
} from "reactstrap";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


class TeamModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamName: "",
      played: 0,
      goalF: 0,
      goalA: 0,
      lose: 0,
      win: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyForm = this.verifyForm.bind(this);
  }

  verifyForm() {
    const { teamName, played } = this.state;

    //no empty team name allowed
    if (teamName === "") {
      NotificationManager.warning("Warning message", "Enter Team Name", 3000);
    }

    //number of played games
    if (played > 30) {
      NotificationManager.warning(
        "Warning message",
        "Each Team should have < 30 plays",
        3000
      );
    }
    //checking number of team if exceeding 16
    if (this.props.teamLength > 15) {
      NotificationManager.error(
        "Error message",
        "No more than 16 teams can be added!",
        3000
      );
    }
    //both conditions passed, form can be submitted
    if (
      parseInt(played) < 30 &&
      this.props.teamLength < 16 &&
      teamName.length > 0
    ) {
      this.handleSubmit();
      this.setState({ teamName: "" });
    }
  }
  handleSubmit() {
    const { teamName, played, goalF, goalA, win, lose } = this.state;
    let today = new Date();
    let date =  (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
  
    this.props.addTeam(teamName, played, goalF, goalA, win, lose, dateTime);
    this.props.toggle();
    NotificationManager.success("Success message", "Team have been added");
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.props.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle} close={closeBtn}>
            Add Team
          </ModalHeader>
          <ModalBody>
            <Form>
              <Input
                placeholder="Team Name"
                onChange={e => {
                  this.setState({ teamName: e.target.value });
                }}
              />
              <br />

              <Input
                placeholder="Play"
                onChange={e => {
                  this.setState({ played: e.target.value });
                }}
              />
              {this.played < 30 ? (
                <FormFeedback invalid>
                  Sweet! that name is available
                </FormFeedback>
              ) : null}
              <br />
              <Input
                placeholder="Goal Forward"
                onChange={e => {
                  this.setState({ goalF: e.target.value });
                }}
              />
              <br />
              <Input
                placeholder="Goal Against"
                onChange={e => {
                  this.setState({ goalA: e.target.value });
                }}
              />
              <br />
              <Input
                placeholder="Wins"
                onChange={e => {
                  this.setState({ win: e.target.value });
                }}
              />
              <br />
              <Input
                placeholder="Lost"
                onChange={e => {
                  this.setState({ lose: e.target.value });
                }}
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.verifyForm}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <NotificationContainer />
      </div>
    );
  }
}

export default TeamModal;
