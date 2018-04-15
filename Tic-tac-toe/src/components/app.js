import React from "react";
import { Component } from "react";
import Board from './board';
import PlayerButtons from "./player_buttons";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}
