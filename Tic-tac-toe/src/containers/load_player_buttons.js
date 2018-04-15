import React, { Component } from 'react';
import fetchPlayer from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import playerButtons from "../components/player_buttons";
import GameMenu from '../components/game_menu';

var arr = ['', '' , '', '', '', '', '', '', ''];
var player_chance= 0;
var player = '';
var gameOver = false;

class LoadPlayerButtons extends Component{

    constructor(props){
        super(props);
    }

    checkBeforeClickAction(player, index_val){
        if(arr[index_val] == '')
            this.props.fetchPlayer(player, index_val);
    }

    checkForWinner(){
        var firstRow= [ arr[0], arr[1], arr[2] ]
        var secondRow= [ arr[3], arr[4], arr[5] ]
        var thirdRow= [ arr[6], arr[7], arr[8] ]

        var firstColumn= [ arr[0], arr[3], arr[6] ]
        var secondColumn= [ arr[1], arr[4], arr[7] ]
        var thirdColumn= [ arr[2], arr[5], arr[8] ]

        var diagnalOne = [ arr[0], arr[4], arr[8]]
        var diagnalTwo = [ arr[2], arr[4], arr[6]]

        if( !!firstRow.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+firstRow[0];
        }
        else if(!!secondRow.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+secondRow[0];
        }
        else if(!!thirdRow.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+thirdRow[0];
        }

        else if( !!firstColumn.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+firstColumn[0];
        }
        else if(!!secondColumn.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+secondColumn[0];
        }
        else if(!!thirdColumn.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true)
            return "Winner is "+thirdColumn[0];

        else if( !!diagnalOne.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+diagnalOne[0];
        }
        else if(!!diagnalTwo.reduce(function(a, b){ return (a === b) ? a : NaN; }) == true){
            gameOver = true;
            return "Winner is "+diagnalTwo[0];
        }
        else if(!arr.includes('')){
            gameOver = true;
            return "Draw Game"
        }
    }

    render(){
       player_chance++;
       arr[this.props.position.index] =this.props.position.payload;
       var winner = this.checkForWinner();

       if(gameOver == true || arr.contains){
            arr = ['', '' , '', '', '', '', '', '', ''];
            player_chance= 0;
            player = '';
            gameOver = false;
            this.props.position.index= '';
            return <GameMenu
                    winner = {winner}
                    game_status = { false }
                    game_status_change={ this.props.game_status_change } />
       }

       if(player_chance % 2 == 0)
            player = 'player2';
       else
            player = 'player1';

       return (
        <table className="player-buttons">
            <tbody>
                <tr className="tr-height">
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 0) } className="button-position" id="id-0">{ playerButtons(arr[0]) }</td>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 1) } className="button-position" id="id-1">{ playerButtons(arr[1]) }</td>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 2) } className="button-position" id="id-2">{ playerButtons(arr[2]) }</td>
                </tr>
                <tr>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 3) } className="button-position" id="id-3">{ playerButtons(arr[3]) }</td>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 4) } className="button-position" id="id-4">{ playerButtons(arr[4]) }</td>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 5) } className="button-position" id="id-5">{ playerButtons(arr[5]) }</td>
                </tr>
                <tr>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 6) } id="id-6">{ playerButtons(arr[6]) }</td>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 7) } id="id-7">{ playerButtons(arr[7]) }</td>
                    <td onClick={ ()=> this.checkBeforeClickAction(player, 8) } id="id-8">{ playerButtons(arr[8]) }</td>
                </tr>
            </tbody>
        </table>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPlayer}, dispatch);
}

function mapStateToProps(state){
    if(state.position == null)
        return { position:  ''};
    else
        return { position:  state.position};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadPlayerButtons);


