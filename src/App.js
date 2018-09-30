import React, { Component } from 'react';
import './App.css';
import {} from 'semantic-ui-react';
import { connect } from 'react-redux';
import{} from './types.js';
import{ store } from './store.js';
import WeatherFrame from './containers/weatherFrame.js'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <WeatherFrame/>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    state
  }
}
export default connect(mapStateToProps)(App);
