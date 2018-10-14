import React, { Component } from 'react';
import { connect } from 'react-redux';
import { key } from '../apiKey.js';
import '../weather.css';
import WeatherDisplay from '../components/weatherDisplay.js';
import { LOAD_WEATHER } from '../types.js'

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
		     const action = {
           type: LOAD_WEATHER,
           payload: json
         }
         state.dispatch(action)
       })
      }

  render(){
    return(
      <React.Fragment>
        <WeatherDisplay weatherGet={this.locationGet}/>
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
