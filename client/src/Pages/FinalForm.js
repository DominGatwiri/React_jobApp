import React, { Component } from 'react'

export class FinalForm extends Component {
    constructor(props){
        super(props);
      
       
    }    
  render() {

    return (
      <div>
        <p>{this.props.location.state.questionOne}</p>
        <p>{this.props.location.state.questionTwo}</p>
        <p>{this.props.location.state.questionThree}</p>
        <p>{this.props.location.state.questionFour}</p>
        <p>{this.props.location.state.questionFive}</p>
      </div>
    )
  }
}

export default FinalForm
