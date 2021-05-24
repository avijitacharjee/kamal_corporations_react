import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/home/Home'
class App extends React.Component {
  componentDidMount() {
    document.title = "Kamal Corporations";
  }
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default App;
