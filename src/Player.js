import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';


const player1 = "#ff0000";//Red
const player2 = "#FFFF00";//Yellow
class Player extends Component{    
    constructor(props){
        super(props);
        this.state ={                      
            nextPlayer:"#A9A9A9"
        };
        this.handleStartClick = this.handleStartClick.bind(this);        
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.nextPlayer!==this.state.nextPlayer){
            this.setState({nextPlayer:nextProps.nextPlayer});
            this.props.nextPlayercallback(this.state.nextPlayer);
        }
    }
    handleStartClick = () =>{
        this.setState({nextPlayer:player1});
    };
    render(){
        return(
            <div className="player_container">
            <button className="start_button" onClick={this.handleStartClick}>Start</button>
            <br/><br/>      
            <p> Next Player </p>
            <Circle r={25} fill={{color:this.state.nextPlayer}}/>
            </div>
        );
    }
}
export default Player;