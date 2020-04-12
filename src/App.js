import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Component/Header/Menu/Menu";
import Appointment from "./Component/Appointment/Appointment";
import Home from "./Component/Home/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import AppointmentDeshbord from "./Component/AppointmentDeshbord/AppointmentDeshbord";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
            <Home />
          </Route>
          <Route path="/appointment">
            <Menu />
            <Appointment />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/appointmentDeshbord">
            <AppointmentDeshbord />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
