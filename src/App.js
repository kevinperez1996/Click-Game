import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Score from "./components/Score";
import Cars from "./Cars.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cars to the cards json array
  state = {
    Cars,
    clickedCarsIds: [],
    score: 0,
    goal: 12,
    message: ""
  };

  //shuffle the car cards in the browser when clicked
  randomizeCards = id => {
    let clickedCarsIds = this.state.clickedCarsIds;

    if (clickedCarsIds.includes(id)) {
      this.setState({ clickedCarsIds: [], score: 0, message: "Game Over!You've clicked that image before. Click any image to retry." });
      return;
    } else {
      clickedCarsIds.push(id)

      if (clickedCarsIds.length === 12) {
        this.setState({ score: 12, message: "You Won! Great Job! Click any image to retry.", clickedCarsIds: [] });
        return;
      }

      this.setState({ Cars, clickedCarsIds, score: clickedCarsIds.length, message: " " });

      for (let i = Cars.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Cars[i], Cars[j]] = [Cars[j], Cars[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clicky Game</h1>
          <p className="App-intro"> Try not to click the an image more than once!</p>
          <p>
            <Score total={this.state.score}
              goal={12}
              message={this.state.message}
            />
          </p>
        </header>
        <Container>
          {this.state.Cars.map(Cars => (
            <Card
              randomizeCards={this.randomizeCards}
              id={Cars.id}
              key={Cars.id}
              image={Cars.image}
            />
          ))}
        </Container>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;