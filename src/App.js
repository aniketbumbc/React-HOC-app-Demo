import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'; 



export class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>HOC </h1>
      <ClickCounter/>
      <HoverCounter  name="Bunny"/>
      </div>
    )
  }
}

export default App


