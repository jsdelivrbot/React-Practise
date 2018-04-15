import React from 'react';
// Replay Button
export default (props) =>{
    return (
    <div id="replay-game" className="game-buttons">
        <button onClick={() =>props.game_status_change("playing")}>Replay</button>
    </div>
    );
}
