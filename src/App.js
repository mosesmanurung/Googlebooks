import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
