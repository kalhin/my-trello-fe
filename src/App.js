import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Board from './components/Board';
// import Notification from './components/Notofication';
import { ROUTES } from "../src/constants/routes";
import "./styles/index.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.MAIN} component={MainPage} />
        <Route path={ROUTES.BOARD} component={Board} />
      </Switch>
    </div>
  );
};
