import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route render={() => <Redirect to="/"></Redirect>}></Route>
      </Switch>
    </div>
  );
}

export default App;
