import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome Redux
            </p>
          
          </header>
          <PostForm/>
          <Post/>
        </div>
      </Provider>
    );
  }
}

export default App;
