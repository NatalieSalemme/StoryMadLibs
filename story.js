import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ''
    }
    this.place = this.place.bind(this);
  }
  place(e) {
    this.setState({
      place: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Mad Libs</h1>
        <p>Please fill in the boxes and create your own story.</p>
        <input type="text" placeholder="Name of a place" onChange={this.place}/>
        <input type="text" placeholder="Color" onChange={this.color} />
        <input type="text" placeholder="Verb" onChange={this.verb} />
        <input type="text" placeholder="Name for a pet" onChange={this.pet} />
        <input type="text" placeholder="Body part" onChange={this.bodypart} />
        <input type="text" placeholder="Drink" onChange={this.drink} />
        <input type="text" placeholder="Number" onChange={this.number} />
      </div>
    );
  }
}

export default App;

