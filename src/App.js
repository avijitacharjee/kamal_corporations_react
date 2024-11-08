import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import { Products } from "./components/products/Products"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route path="/Products" element={<Products/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/partnership" element={<Partnership/>} />
          <Route path="/company_profile" element={<CompanyProfile/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
