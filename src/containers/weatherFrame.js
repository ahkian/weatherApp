import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherFrame extends Component {
  locationGet = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=brooklyn`
    // {
    //   mode: 'no-cors',
    //   headers:{
    //     'Access-Control-Allow-Origin': '*',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // }
  )
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render(){
    return(
      <React.Fragment>
        <button onClick={this.locationGet}></button>
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
