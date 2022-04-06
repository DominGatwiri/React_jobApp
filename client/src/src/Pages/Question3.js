import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import './RecruiterSignUp.css';
import img1 from './img1.jpg';

export class Question3 extends Component {
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
    console.log(event.target.value)
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
        pathname: "/question4",
        state: { questionOne : this.props.location.state.questionOne,
                 questionTwo: this.props.location.state.questionTwo, questionThree: this.state.selectedOption }
      }}
    />
    }
    return (
      <div>
             <div className="Vid">
<img src={img1} alt=""/>
</div>

        <div>
        <div>
<div className='container' style={{marginTop:'130px', width:"600px", letterSpacing:'2px', }}>

<div >
<h1>Question 3</h1>
<label>1.Choose the verb that best completes the sentence:<br/>
When we came home in the evening, we found that Lisa ______from the couch all day long.<br />
</label> <br />
<form onSubmit={this.formSubmit}>
<div className="radio">
<label>
 <input type="radio" value="A" checked={this.state.selectedOption == 'A'} onChange={this.onValueChange} />
 A. Moving
</label>
</div>

<div className="radio">
<label>
 <input type="radio" value="B" checked={this.state.selectedOption == 'B'} onChange={this.onValueChange} />
 B. Hadn’t moved
</label>
</div>

<div className="radio">
<label>
 <input type="radio" value="C" checked={this.state.selectedOption == 'C'} onChange={this.onValueChange} />
 C. Wasn’t moving
</label>
</div>

<div className="radio">
<label>
 <input type="radio" value="D" checked={this.state.selectedOption == 'D'} onChange={this.onValueChange} />
 D. Move
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

      </div>
    )
  }
}

export default Question3
