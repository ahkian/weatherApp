import React, { Component } from 'react';
import { connect } from 'react-redux';
import { key } from '../apiKey.js';
import '../weather.css';
import WeatherDisplay from '../components/weatherDisplay.js';


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



  render(){
    return(
      <React.Fragment>
        <WeatherDisplay/>
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
