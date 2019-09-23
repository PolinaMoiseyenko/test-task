import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Clients from './components/clients/index';

function App() {
  return (
    <Router>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <div>
          <Route path="/" exact component={Login}></Route>
          <Route path="/clients" component={Clients}></Route>
        </div>
      </div>
    </Router>);
}

export default App;
