import React, { Component } from 'react';
import { connect } from 'react-redux';
import { key } from '../apiKey.js';
import '../weather.css';

class WeatherFrame extends Component {
  constructor(){
    super()
    this.state = {
      weather: null
    }
  }

  statusCheck = (response) => {
              if (response.status === 200) {
                console.log('Success!!');
              } else {
                console.log('Failed');
              }
            }

  locationGet = () => {
    fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=8d2e0f9140b10ca988b3cff5f9dfd658")
	   .then(res => res.json())
	   .then(json =>{
		     this.setState({weather: json})
       })
      }

  render(){
    return(
      <React.Fragment>
        <button onClick={this.locationGet}>Get Weather</button>
        {this.state.weather !== null ? <div><p>Temperature: {Math.round((this.state.weather.main.temp) * (9/5) - 459.76)}º Farenheit</p></div>:<p>Fetch the weather</p>}
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
export default connect(mapStateToProps)(WeatherFrame);
