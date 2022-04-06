import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./RecruiterSignUp.css";
import img1 from "./img1.jpg";

export class ApplicantSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      email: "",
      signUpError: "",
      success: false,
    };

    this.submit = this.submit.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const data = this.state;

    axios
      .post("http://localhost:5000/api/applicantsignup", data)
      .then((res) => {
        if (!res.data.success) {
          return this.setState({ signUpError: res.data.message });
        }

        this.setState({
          userName: "",
          password: "",
          email: "",
          signUpError: "",
          success: true,
        });
      });
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/applicantsignin" />;
    }
    return (
      <div>
        <div className="Vid">
          <img src={img1} alt="" />
        </div>

        <div
          className="container"
          style={{ marginTop: "130px", width: "600px", letterSpacing: "2px" }}
        >
          <div>
            <h1>Applicant Sign Up</h1>
            <label>userName :</label>{" "}
            <input
              type="text"
              id="applicantName"
              onChange={this.changeInput}
              placeholder="applicantName..."
            />
            <br />
            <label>password :</label>{" "}
            <input
              type="password"
              id="password"
              onChange={this.changeInput}
              placeholder="password..."
            />
            <br />
            <label>email :</label>{" "}
            <input
              type="email"
              id="email"
              onChange={this.changeInput}
              placeholder="email..."
            />
            <br />
            <label>mobile :</label>{" "}
            <input
              type="mobile"
              id="mobile"
              onChange={this.changeInput}
              placeholder="mobile..."
            />
            <br />
            {this.state.signUpError ? this.state.signUpError : ""}
            <br />
            <input
              type="button"
              value="submit"
              id="btn"
              onClick={this.submit}
            />
            <p>
              If you have an account <Link to="/applicantsignin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicantSignUp;
