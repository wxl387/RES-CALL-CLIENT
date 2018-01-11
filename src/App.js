import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/RegisterPage" component={RegisterPage} />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/MainPage" component={MainPage} />
      </Switch>
    </div>
  </Router>

export default App;
