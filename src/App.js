import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import { Products } from "./components/products/Products"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import History from "./components/history/History";
import Partnership from "./components/partnership/Partnership";
import CompanyProfile from "./components/company_profile/CompanyProfile";
class App extends React.Component {
  componentDidMount() {
    document.title = "Kamal Corporations";
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/Products" component={Products} />
          <Route path="/history" component={History} />
          <Route path="/partnership" component={Partnership} />
          <Route path="/company_profile" component={CompanyProfile}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
