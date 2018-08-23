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
      isPlayer1:false,
      isgameplayer1:false      
    };
  }
  setnextplayer = (isplayerOne) => {
      this.setState({isPlayer1:isplayerOne});
  }
  setgameplayed = (isP1) =>{
    this.setState({isgameplayer1:isP1});
  }  
  render() {         
    return (
      <div className="App">
      <div className="container">
      <Container>
        <Row>
            <Col sm={2}>
                <Player playerprop = {this.state.isgameplayer1} playercallback ={this.setnextplayer}/>
            </Col>
            <Col sm={8}>
                <div>                          
                <GameBoard gameprop = {this.state.isPlayer1} gamecallback ={this.setgameplayed}/>
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
