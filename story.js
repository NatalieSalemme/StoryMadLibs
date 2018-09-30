import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      color: '',
      verb: '',
      pet: '',
      bodypart: '',
      drink: '',
      number: '',
      season: ''
    }
    this.place = this.place.bind(this);
    this.color = this.color.bind(this);
    this.verb = this.verb.bind(this);
    this.pet = this.pet.bind(this);
    this.bodypart = this.bodypart.bind(this);
    this.drink = this.drink.bind(this);
    this.number = this.number.bind(this);
    this.season = this.season.bind(this);
    this.submit = this.submit.bind(this);
  }
  place(e) {
    this.setState({
      place: e.target.value
    });
  }
  color(e) {
    this.setState({
      color: e.target.value
    });
  }
  verb(e) {
    this.setState({
      verb: e.target.value
    });
  }
  pet(e) {
    this.setState({
      pet: e.target.value
    });
  }
  bodypart(e) {
    this.setState({
      bodypart: e.target.value
    });
  }
  drink(e) {
    this.setState({
      drink: e.target.value
    });
  }
  number(e) {
    this.setState({
      number: e.target.value
    });
  }
  season(e) {
    this.setState({
      season: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    if(this.number) {
      return <p>hello</p>
    }

  }
  render() {
    return (
      <div className="App">
        <h1>Mad Libs</h1>
        <p>Please fill in the boxes and create your own story.</p>
        <div class="row">
        <input type="text" placeholder="Name of a place" onChange={this.place}/>
        <input type="text" placeholder="Color" onChange={this.color} />
        <input type="text" placeholder="Verb" onChange={this.verb} />
        <input type="text" placeholder="Name for a pet" onChange={this.pet} />
      </div>
      <div class="row">
        <input type="text" placeholder="Body part" onChange={this.bodypart} />
        <input type="text" placeholder="Drink" onChange={this.drink} />
        <input type="number" placeholder="Number" onChange={this.number} />
        <input type="text" placeholder="Season of the year" onChange={this.season} />
      </div>
      <input type="submit" value="Create Story" onSubmit={this.submit}/>
      <div>
        
      </div>
      </div>
    );
  }
}

export default App;
