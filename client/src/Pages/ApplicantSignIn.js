import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import NavBar from "../components/views/NavBar";
import axios from 'axios';
import './RecruiterSignUp.css';
import img1 from './img1.jpg';

export class ApplicantSignIn extends Component {
    constructor(props){
        super(props);
    
        this.state ={
          userName:"",
          password:"",
          signInError:"",
          success:false
        }
    
        this.submit = this.submit.bind(this);
        this.changeInput = this.changeInput.bind(this);
        
      }
    
      changeInput = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
    
      submit = (event) => {
        event.preventDefault();
       
        const data = this.state;
      
        axios.post('http://localhost:5000/api/applicantsignin',data)
        .then(
          res =>{
            if (!res.data.success){
              return this.setState({signInError: res.data.message})
            }
    
            this.setState({
              signInError:"",
             success:true
            })
            
    
          }
        )
    
      } 
    
    
      render() {
        if(this.state.success){ 
        return <Redirect to={{
          pathname: "/applicantlandingpage",
          search: "?utm=your+face",
          state: { userName: this.state.userName }
        }} />
      }
        return (
          <div>
             <NavBar/>
             <div className="Vid">
  <img src={img1} alt=""/>
</div>
    
    
          <div className='container' style={{marginTop:'130px', width:"600px", letterSpacing:'2px'}}>
    
                  <div >
                        <h1>Applicant Sign In</h1>
                        <label>userName :</label> <input type="text" id='userName' onChange={this.changeInput} placeholder="employeeName..." /><br />
                        <label>password :</label> <input type="password" id='password' onChange={this.changeInput} placeholder="email..." /><br />
                        
                        {this.state.signInError ? this.state.signInError : ''}
          <br/>
          <input type="button" value='submit' id='btn' onClick={this.submit} />
                        <p>If you do not have an account <Link to='/applicantsignup'>Sign Up</Link></p>
                    </div>
    
          </div>
          </div>
        )
      }
    }
    

export default ApplicantSignIn
