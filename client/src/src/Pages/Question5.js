import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./RecruiterSignUp.css";
import img1 from "./img1.jpg";

export class Question5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      answered: false,
      error: "",
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
    console.log(event.target.value);
  }

  formSubmit(event) {
    event.preventDefault();
    const { selectedOption } = this.state;

    if (!selectedOption) {
      return this.setState({
        error: "Kindly Select an Answer To Proceed",
      });
    }

    this.setState({
      answered: true,
    });
  }

  render() {
    const { error, answered } = this.state;
    if (answered) {
      return (
        <Redirect
          push
          to={{
            pathname: "/finalform",
            state: {
              questionOne: this.props.location.state.questionOne,
              questionTwo: this.props.location.state.questionTwo,
              questionThree: this.props.location.state.questionThree,
              questionFour: this.props.location.state.questionFour,
              questionFive: this.state.selectedOption,
            },
          }}
        />
      );
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
                <h1>Question 5</h1>
                <label>
                  A user is encountering a problem where part of their email
                  signature is appearing to others as a separate attachment.
                  <br />
                  Which of the following could fix this issue?
                </label>{" "}
                <br />
                <form onSubmit={this.formSubmit}>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="A"
                        checked={this.state.selectedOption == "A"}
                        onChange={this.onValueChange}
                      />
                      A. Remove images from the signature.
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="B"
                        checked={this.state.selectedOption == "B"}
                        onChange={this.onValueChange}
                      />
                      B.Change the email format to HTML.
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="C"
                        checked={this.state.selectedOption == "C"}
                        onChange={this.onValueChange}
                      />
                      C. Use animated GIFs to slowly display the signature.
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="D"
                        checked={this.state.selectedOption == "D"}
                        onChange={this.onValueChange}
                      />
                      D. Scale the signature to 50%.
                    </label>
                  </div>

                  <br />
                  {error ? (
                    <div class="alert alert-primary" role="alert">
                      <strong>{error}</strong>
                    </div>
                  ) : null}
                  <button className="btn btn-default" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question5;
