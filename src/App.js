import React, { Component } from 'react';
import './App.css';
import {} from 'semantic-ui-react';
import { connect } from 'react-redux';
import{} from './types.js';
import{ store } from './store.js'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">

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
