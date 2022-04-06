import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import img1 from "./img1.jpg";

export class FinalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: 0,
      submiited: false,
      updateError: "",
      success: "false",
    };

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const {
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive,
    } = this.props.location.state;
    let marks = 100;
    if (questionOne != "A") {
      marks = marks - 20;
    }
    if (questionTwo != "B") {
      marks = marks - 20;
    }
    if (questionThree != "C") {
      marks = marks - 20;
    }
    if (questionFour != "D") {
      marks = marks - 20;
    }
    if (questionFive != "A") {
      marks = marks - 20;
    }

    return this.setState({
      marks: marks,
    });
  }

  submit(event) {
    event.preventDefault();

    const data = this.state;

    axios
      .patch("http://localhost:5000/api/updateskillmarks", data)
      .then((res) => {
        if (!res.data.success) {
          return this.setState({ updateError: res.data.message });
        }

        this.setState({
          updateError: "",
          success: true,
        });
      });
  }

  render() {
    if (this.state.success) {
      return <Redirect path="/applicantlandingpage" />;
    }
    return (
      <div>
        <div className="Vid">
          <img src={img1} alt="" />
        </div>

        <div>
          <div>
            <div
              className="container"
              style={{
                marginTop: "130px",
                width: "600px",
                letterSpacing: "2px",
              }}
            >
              <div>
                <h1>Submit Form</h1>
                <label>
                  <p>The following are your answers</p>
                  <p> 1: {this.props.location.state.questionOne}</p>
                  <p> 2: {this.props.location.state.questionTwo}</p>
                  <p> 3: {this.props.location.state.questionThree}</p>
                  <p> 4: {this.props.location.state.questionFour}</p>
                  <p> 5: {this.props.location.state.questionFive}</p>
                </label>
                <button className="btn btn-default" onClick={this.submit}>
                  Submit The Answers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinalForm;
