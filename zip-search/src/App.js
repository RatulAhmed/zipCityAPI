import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchZip from './FetchZip'
import './App.css';



class App extends Component {
  
  render() {
  return(
    <div>
    <header>Zip Code Search</header>
    <FetchZip/>
    </div>
    )
  }
}

export default App;
