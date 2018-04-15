import React from 'react';

export default function playerButtons(player){
    // X and O buttons
        if( player == "player1"){
            return <div><img className='pb-1' src='../../style/images/cross_button.png' /></div>;
        }
        else if( player === "player2"){
            return <div><img className='pb-2' src='../../style/images/ovel_button.png' /></div>;
        }
        else{
            return <div className="hidden"/>;
        }
}

