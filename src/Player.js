import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';


const player1 = "#ff0000";//Red
const player2 = "#FFFF00";//Yellow
const defaultPlayer = "#A9A9A9";
class Player extends Component{    
    constructor(props){
        super(props);
        this.state ={                      
            isPlayer1:false,
            nextPlayer:"p1",
            color:defaultPlayer            
        };
        this.handleStartClick = this.handleStartClick.bind(this);        
    }
    componentWillReceiveProps(propsIsPlayer1){
        if(propsIsPlayer1){
            this.setState({nextPlayer:"p2"});            
            this.setState({isPlayer1:false});
            this.setState({color:player2});            
        }
        else{
            this.setState({nextPlayer:"p1"});            
            this.setState({isPlayer1:true});
            this.setState({color:player1}); 
        }
        this.props.playercallback(this.state.isPlayer1);
    }
    handleStartClick = () =>{
        this.setState({nextPlayer:"p1"});
        this.setState({isPlayer1:true});
        this.setState({color:player1});
        this.props.playercallback(this.state.isPlayer1);
    };
    render(){
        return(
            <div className="player_container">
            <button className="start_button" onClick={this.handleStartClick}>Start</button>
            <br/><br/>      
            <p> Next Player </p>
            <Circle r={25} fill={{color:this.state.color}}/>
            </div>
        );
    }
}
export default Player;