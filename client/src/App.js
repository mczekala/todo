import React, { Component } from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import Form from './components/Form';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <div className="align-middle">
          <List/>
          <Form/>
          </div>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;