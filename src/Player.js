import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';

class Player extends Component{
    render(){
        return(
            <div className="player_container">
            <p> Next Player </p>
            <Circle r={25} fill={{color:'#FF0000'}}/>
            </div>
        );
    }
}
export default Player;