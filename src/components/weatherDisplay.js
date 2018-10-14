import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDisplay extends Component {

  render(){
    return(
      <React.Fragment>
        <button onClick={this.props.weatherGet}>Get Weather</button>
        {this.props.weather !== null ? <div><p>Temperature: {Math.round((this.state.weather.main.temp) * (9/5) - 459.76)}º Farenheit</p></div>:<p>Fetch the weather</p>}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    weather: state.weather
  }
}
export default connect(mapStateToProps)(WeatherDisplay);
