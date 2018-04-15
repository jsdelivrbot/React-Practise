import React from "react";
import { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";


export default class App extends Component {
    //What ever returned will be shown as props inside BookList
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
