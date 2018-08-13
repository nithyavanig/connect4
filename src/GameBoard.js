import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';
import {ButtonComponent} from './ButtonComponent.js';

class GameBoard extends Component{
    constructor(props){
        super(props);
    }
    renderCircle(){
        let circleRowCol = [];
        for(let rows=0;rows<7;rows++){
            for(let col=0;col<7;col++){
                circleRowCol.push(<button className="circle_button" onClick ={this.handleClick()} />);
                circleRowCol.push(<span>{' '}</span>);                
            }
            circleRowCol.push(<br/>);            
        }
        return circleRowCol;
    }
    handleClick(){
        
    }
    handleStartClick(){
        let nextPlayerColor = "#ff0000";
    }

    render(){        
        return(
        <div>
            <button className="start_button" onClick={this.handleStartClick()}>Start</button>
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