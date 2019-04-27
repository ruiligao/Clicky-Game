import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer"
import Cards from "./Cards.json";
import './App.css';

class App extends Component {
  state = {
    Cards,
    clickedCardIds: [],
    score: 0,
    highscore: 0,
    message: "Click an image to begin!"
  };

  imageClick = id => {
    let clickedCardIds = this.state.clickedCardIds;
    console.log(id);
    console.log(clickedCardIds);
    if (clickedCardIds.includes(id)) {
      this.setState({
        clickedCardIds: [], score: 0, message: "Game Over! You lost. Click to play again!"
      });
    }
    else {
      clickedCardIds.push(id)
      if (clickedCardIds.length === 12) {
        this.setState({
          score: 12, highscore: 12, message: "You Won! Great Job, Smartie! Click to play again!", clickedCardIds: []
        });
      }
      else {
        this.setState({
          Cards, clickedCardIds, score: clickedCardIds.length,
          highscore: clickedCardIds.length, message: "Correct, keep going!!"
        });
        for (let i = Cards.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [Cards[i], Cards[j]] = [Cards[j], Cards[i]];
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Nav
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Cards.map((card, i) => (
            <Card
              key={i}
              imageClick={this.imageClick}
              id={card.id}
              image={card.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
