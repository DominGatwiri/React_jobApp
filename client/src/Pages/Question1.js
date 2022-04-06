import axios from 'axios';
import {Redirect} from 'react-router-dom';
import React,{Component} from 'react';
import './RecruiterSignUp.css';
import img1 from './img1.jpg';


export class Question1 extends Component {
constructor(props){
  super(props);

  this.state={
    selectedOption: null,
    answered: false,
    error: ""
  }

  this.onValueChange = this.onValueChange.bind(this);
  this.formSubmit = this.formSubmit.bind(this);
}

onValueChange(event) {
  this.setState({
    selectedOption: event.target.value
  });
}

formSubmit(event) {
  event.preventDefault();
  const { selectedOption } = this.state;

  if(!selectedOption){
   return  this.setState({
      error: "Kindly Select an Answer To Proceed"
    })
  }

  this.setState({
    answered: true
  })
}

  render() {

    const { error, answered } = this.state;
    if(answered){
      return <Redirect
      push
      to={{
        pathname: "/question2",
        state: { questionOne: this.state.selectedOption }
      }}
    />
    }

    return (
      <div>

      <div className="Vid">
<img src={img1} alt=""/>
</div>

      <div>
           <div className='container' style={{marginTop:'130px', width:"600px", letterSpacing:'2px'}}>
    
    <div >
          <h1>Question 1</h1>
          <label>Solve for the positive value of ‘y’ for the following equation:<br />
(1/2)y2 - x2 = x/2 where x=4 </label> <br />
<form onSubmit={this.formSubmit}>
<div className="radio">
          <label>
            <input type="radio" value="A" checked={this.state.selectedOption === "A"} onChange={this.onValueChange}/>
            A. 18.5
          </label>
        </div>
        
<div className="radio">
        <label>
            <input type="radio" value="B" checked={this.state.selectedOption === "B"} onChange={this.onValueChange} />
            B. 4.5
          </label>
        </div>

        <div className="radio">
        <label>
            <input type="radio" value="C" checked={this.state.selectedOption==="C" } onChange={this.onValueChange}/>
            C. 6
          </label>
        </div>

        <div className="radio">
        <label>
            <input type="radio" value="D" checked={this.state.selectedOption ==="D"} onChange = {this.onValueChange}/>
            D. 9
          </label>
        </div>

        <br/>
        { error ? ( <div class="alert alert-primary" role="alert">
          <strong>{error}</strong>
        </div>): null}
        <button className="btn btn-default" type="submit">
          Submit
        </button>
        </form>
          
         
      </div>

</div>
      </div>
      </div>
    )
  }
}

export default Question1
