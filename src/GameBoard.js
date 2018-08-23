import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';
import {ButtonComponent} from './ButtonComponent.js';
const player1 = "#ff0000";//Red
const player2 = "#FFFF00";//Yellow
const defaultPlayer = "#A9A9A9";
let boardArray = [];
class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state ={
            isPlayer1:false,
            playerColor:defaultPlayer
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    renderCircle(){
        let circleRowCol = [];
        for(let rows=0;rows<7;rows++){
            for(let col=0;col<7;col++){
                circleRowCol.push(<button className="circle_button" onClick ={this.handleClick} />);
                circleRowCol.push(<span>{' '}</span>);                
            }
            circleRowCol.push(<br/>);            
        }
        return circleRowCol;
    }
    handleClick(){
        let isPlay1 = this.props.gameprop;
        this.setState({isPlayer1:isPlay1});
        if(isPlay1){
            this.setState({playerColor:player1});
        }
        else{
            this.setState({playerColor:player2});
        }
        this.props.gamecallback(this.state.isPlayer1);
    }

    render(){        
        return(
        <div>                       
            <div className ="gameboard_container">            
                <div className="board_table">
                    {this.renderCircle()}            
                </div>
            </div>
        </div>    
    );
    }
}
export default GameBoard;