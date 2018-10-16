import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOAD_WEATHER } from '../types.js'

class WeatherDisplay extends Component {

  locationGet = () => {
    fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=8d2e0f9140b10ca988b3cff5f9dfd658")
	   .then(res => res.json())
	   .then(json =>{
		     const action = {
           type: LOAD_WEATHER,
           payload: json
         }
         this.props.dispatch(action)
         console.log("props", this.props)
       })
      }

  render(){
    return(
      <React.Fragment>
        <button onClick={this.locationGet}>Get Weather</button>
        {this.props.weather !== null ? <div><p>Temperature: {Math.round((this.props.weather.main.temp) * (9/5) - 459.76)}º Farenheit</p></div>:<p>Fetch the weather</p>}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  console.log("state", state)
  return{
    weather: state.weather
  }
}
export default connect(mapStateToProps)(WeatherDisplay);
