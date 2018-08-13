import React, { Component } from 'react';
import './App.css';
import {Circle} from 'react-shapes';

class Player extends Component{
    constructor(props){
        super(props);
        this.state ={
            nextPlayer:"#A9A9A9"
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.nextPlayer!==this.state.nextPlayer){
            this.setState({nextPlayer:nextProps.nextPlayer});
            this.props.nextPlayercallback(this.state.nextPlayer);
        }
    }
    render(){
        return(
            <div className="player_container">
            <p> Next Player </p>
            <Circle r={25} fill={{color:this.state.nextPlayer}}/>
            </div>
        );
    }
}
export default Player;