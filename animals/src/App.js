import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute.js";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import AnimalDashboard from "./components/AnimalDashboard";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Build out a Private Route */}
        <PrivateRoute exact path="/creatures" component={AnimalDashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}
