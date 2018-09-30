import React, { Component } from 'react';
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
      season: '',
      completedForm: false
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
    let { place, color, verb, pet, bodypart, drink, number, season } = this.state;
    if(!place || !color || !verb || !pet || !bodypart || !drink || !number || !season) {
      alert('Please fill in all boxes');
    } else {
      this.setState({
        completedForm: true
      });
    }
  }
  render() {
    if(this.state.completedForm) {
      return (
      <div style={{backgroundColor: 'lightblue'}}>
        <h3 style={{textAlign: 'center', color: 'Purple'}}>Your Personalized Story</h3>
        <img src="src/madlibs.jpg" />
          <p className="paragraphContainer"> Once upon a time, there was a turtle who I named {this.state.pet}.
            It decided it wanted to {this.state.verb} so I really
            had to try hard to catch up to it. I was so thirsty after that so I decided to
            drink {this.state.drink} to quench my thirst. It was {this.state.season} and
            I was definitely NOT dressed properly for the weather that day. Once I
            relaxed a little bit, I looked at the turtle and saw that there was
            a {this.state.color} envelope attached to its {this.state.bodypart}. I
            couldn't believe it, attached were {this.state.number} tickets to my
            favorite place, {this.state.place}. I was so excited I immediately
            tweeted about it.</p>
      </div>
    );
    }
    return (
      <div className="App">
        <h1>Mad Libs</h1>
        <p>Please fill in the boxes and create your own story.</p>
        <form onSubmit={this.submit} className="form">
        <div className="row">
          <div className="column">
        <input type="text" placeholder="Name of a place" onChange={this.place}/>
        <input type="text" placeholder="Color" onChange={this.color} />
      </div>
      <div className="column">
        <input type="text" placeholder="Verb" onChange={this.verb} />
        <input type="text" placeholder="Name for a pet" onChange={this.pet} />
      </div>
      </div>
      <div className="row">
        <div className="column">
        <input type="text" placeholder="Body part" onChange={this.bodypart} />
        <input type="text" placeholder="Drink" onChange={this.drink} />
      </div>
      <div className="column">
        <input type="number" placeholder="Number" onChange={this.number} />
        <input type="text" placeholder="Season of the year" onChange={this.season} />
      </div>
      </div>
      <input type="submit" value="Create Story" onClick={this.submit}/>
    </form>

      </div>
    );
  }
}

export default App;
