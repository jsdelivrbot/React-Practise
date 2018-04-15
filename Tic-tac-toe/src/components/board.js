import React, { Component } from 'react';
import GameMenu from './game_menu';
import PlayerButtons from "./player_buttons";
import LoadPlayerButtons from "../containers/load_player_buttons";

export default class Board extends Component{
    //Board Component
    constructor(props){
        super(props);
        this.state = {game_start: true};
    }

    //load game buttons i.e X and O button
    loadGameButtons(){

        if(this.state.game_start == 'playing')
            return <LoadPlayerButtons
                    game_status_change={ game_status => this.setState({ game_start: game_status}) } />;
        else
            return <GameMenu
                    game_status={ this.state.game_start}
                    game_status_change={ game_status => this.setState({ game_start: game_status}) } />;
    }

    render(){

        return(
            <div className="board">
                <img src='../../style/images/board.png' />
                { this.loadGameButtons() }
            </div>
        );
    }
}
