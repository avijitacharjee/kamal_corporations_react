import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import { Products } from "./components/products/Products"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  componentDidMount() {
    document.title = "Kamal Corporations";
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/Products" component={Products}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
