import React from 'react';
import StartGameButton from "./start_game_button";
import ReplayButton from "./replay_button";

export default function GameMenu(props){
    //Game Menus: Start and Replay Button
    if(props.game_status == true){
        return (
                <div className="menu-box">
                    <StartGameButton game_status_change={ props.game_status_change } />
                </div>
        );
    }
    else if(props.game_status == false){
            return (
                    <div className="menu-box">
                        <div className="center">{ props.winner }</div>
                        <ReplayButton game_status_change={ props.game_status_change } />
                    </div>
            );
    }
    else{
        return <div className="hidden"></div>;
    }
}
