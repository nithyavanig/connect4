import React, { Component } from 'react';
import Player from './Player.js';
import GameBoard from './GameBoard.js';
import Scoreboard from './Scoreboard.js';
import './App.css';
import {Container,Row,Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <Container>
        <Row>
            <Col sm={3}>
                <Player />
            </Col>
            <Col sm={6}>
                <GameBoard />
            </Col>
            <Col sm={3}>
                <Scoreboard /> 
            </Col>
        </Row>
      </Container>  
      </div> 
      </div>
    );
  }
}

export default App;
