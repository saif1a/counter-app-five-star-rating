
/* counter app
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  IncrementItem = () => {
    this.setState({ click: this.state.click + 1 });
  }
  DecreaseItem = () => {
    this.setState({ click: this.state.click - 1 });
  }
  

  render() {
    return (
      <div className="container">
        <button onClick={this.IncrementItem}>+</button>
        <button disabled={this.state.click==0} onClick={this.DecreaseItem}>-</button>
       
        <h2>counter:{ this.state.click }</h2>
      </div>
    );
  }
}

export default App;*/



//five star rating
import React, { Component } from "react";
import EmptyStar from "./assets/empty-star.svg";
import FilledStar from "./assets/filled-star.svg";
import "./Styles.css";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = { currRating: 0 };
    this.onHover = this.onHover.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onHover(e) {
    if (e.target.className === "star") {
      this.setRating(e.target.dataset.value);
    }
  }

  onClick(e) {
    if (e.target.dataset.value === this.state.currRating) {
      this.setRating(e.target.dataset.value - 1);
    }
    else 
    if (e.target.className === "star") {
      this.setRating(e.target.dataset.value);
    }

  }

  setRating(value) {
    this.setState({ currRating: value });
  }

  render() {
    return [...Array(this.props.starCount).keys()].map((index) => {
      return (
        <img
          data-value={index + 1}
          className="star"
          onMouseOver={this.onHover}
          onClick={this.onClick}
          src={index + 1 <= this.state.currRating ? FilledStar : EmptyStar}
          alt={
            index + 1 <= this.state.currRating ? "filled star" : "empty star"
          }
        />
      );
    });
  }
}

const RatingSystem = (props) => {
  return (
    <div>
      <h1>Rate us:</h1>
      <div className="rating">
        <Stars starCount={props.starCount} />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <RatingSystem starCount={5} />
    </div>
  );
}
