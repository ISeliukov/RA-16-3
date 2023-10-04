'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Films } from './engine/Common.js';

import logo from './logo.svg';
import './App.css';

	
class App extends React.Component {

  constructor(props) {
    super(props);
	this.films = props;
  }
  
  render() {
    return (
      <Films list={this.films} />
    );
  }

}

export { App } 
