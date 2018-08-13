import React, { Component } from 'react';
import Player from './Player.js';
import GameBoard from './GameBoard.js';
import Scoreboard from './Scoreboard.js';
import './App.css';
import {Container,Row,Col} from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextPlayer :""
    };
  }
  getNextPlayer = (nextPlayerColor) => {
      this.setState({nextPlayer:nextPlayerColor});
  }  
  render() {         
    return (
      <div className="App">
      <div className="container">
      <Container>
        <Row>
            <Col sm={2}>
                <Player nextPlayercallback ={this.getNextPlayer}/>
            </Col>
            <Col sm={8}>
                <div>                          
                <GameBoard nextPlayerFromApp ={this.state.nextPlayer}/>
                <br/>
                <br/>
                </div>                             
            </Col>
            <Col sm={2}>
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
