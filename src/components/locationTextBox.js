import { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_LOCATION } from '../types.js'

class LocationBox extends Component {

  constructor(){
    super()
    this.state = {
      textValue: ""
    }
  }

  changeHandler = (e) => {
    this.setState({
      textValue: e.target.value
    })
  }

  submitHandler = () =>{
    let action = {
      type: ADD_LOCATION,
      payload: this.state.textValue
    }
    this.props.dispatch
  }

  render(){
    return(
      <React.Fragment>
        <input type='text' value={this.state.textValue} onChange={this.changeHandler}></input>
        <button onClick={}>Submit</button>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    locations: state.locations
  }
}

export default connect(mapStateToProps)(LocationBox);
