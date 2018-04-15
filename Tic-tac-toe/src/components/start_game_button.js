import React from 'react';
// Start Button
export default (props) =>{
    return (
    <div id="start-game" className="game-buttons">
        <button onClick={() =>props.game_status_change("playing")}>Start Game</button>
    </div>
    );
}
