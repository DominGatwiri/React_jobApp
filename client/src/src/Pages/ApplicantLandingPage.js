import React, { Component } from "react";
import "./RecruiterSignUp.css";
import img1 from "./img1.jpg";
import { Link } from "react-router-dom";

export class ApplicantLandingPage extends Component {
  render() {
    return (
      <div>
        <div className="Vid">
          <img src={img1} alt="" />
        </div>
        Welcome
        <div className="section2">
          <p>
            Get access to available job vacancies
            <br />
            Upload Resumes, take skill test
          </p>
        </div>
        <Link to="/question1">
          <button type="button" value="submit" id="btn" onClick={this.submit}>
            Take Skill Test
          </button>
        </Link>
        <Link to="/fileupload">
          <button type="button" value="submit" id="btn1" onClick={this.submit}>
            Upload Resume
          </button>
        </Link>
        <Link to="/viewvacancies">
          <button type="button" value="submit" id="btn2" onClick={this.submit}>
            View Vacancies
          </button>
        </Link>
        z
      </div>
    );
  }
}

export default ApplicantLandingPage;
