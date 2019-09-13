import React, { Component } from 'react';
import InputForm from './components/inputform/input.component';
import BookmarkList from './components/bookmarklist/bookmarklist.component';
import uuid from "uuid";

class App extends Component {
  state = {
    sitename: '',
    siteurl: '',
    bookmarks: [],
    id: uuid()
  }

  UNSAFE_componentWillMount() {
    localStorage.getItem('bookmarks') && this.setState({
      bookmarks: JSON.parse(localStorage.getItem('bookmarks'))
    })
  }

  componentDidMount() {
    if (localStorage.getItem('bookmarks')) {
      this.setState({ bookmarks: this.state.bookmarks })
    } else {
      console.log('using data from local')
    }
  }

  UNSAFE_componentWillUpdate(nextProps, nextstate) {
    localStorage.setItem('bookmarks', JSON.stringify(nextstate.bookmarks))
  }

  handleName = (e) => {
    this.setState({
      sitename: e.target.value
    })
  }
  handleURL = (e) => {
    this.setState({
      siteurl: e.target.value
    })
  }

  addBookMark = (event) => {
    event.preventDefault();
    if (this.state.sitename === '' && this.state.siteurl) {
      return;
    }

    const newBookMark = {
      sitename: this.state.sitename,
      siteurl: this.state.siteurl,
      id: this.state.id
    }

    const updatedBookMarks = [...this.state.bookmarks, newBookMark]

    this.setState({
      bookmarks: updatedBookMarks,
      sitename: '',
      siteurl: '',
      id: uuid()
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.bookmarks.filter(bookmark =>
      bookmark.id !== id)

    this.setState({
      bookmarks: filteredItems
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="container">
            <h1 className="text-center">Bookmarker Application</h1>
            <InputForm
              sitename={this.state.sitename}
              siteurl={this.state.siteurl}
              addBookMark={this.addBookMark}
              handleName={this.handleName}
              handleURL={this.handleURL}
            />
            <BookmarkList
              bookmarks={this.state.bookmarks}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
