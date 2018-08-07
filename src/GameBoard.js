import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';

class GameBoard extends Component{
    constructor(props){
        super(props);
    }
    renderCircle(){
        let circleRowCol = [];
        for(let rows=0;rows<7;rows++){
            for(let col=0;col<7;col++){
                circleRowCol.push(<Circle r={27} fill={{color:'#ffffff'}} />);
            }
            circleRowCol.push(<br/>);            
        }
        return circleRowCol;
    }
    handleClick(){

    }

    render(){        
        return(
        <div className ="gameboard_container">            
            <div className="board_table">
                {this.renderCircle()}            
            </div>
        </div>
    );
    }
}
export default GameBoard;