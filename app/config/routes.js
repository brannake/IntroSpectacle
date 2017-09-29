import React from "react";
import { Route, IndexRoute, Router, hashHistory } from "react-router";

import Main from "../components/Main";
import MainLogin from "../components/MainLogin";
import HeatMaps from "../components/HeatMaps";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainLogin}/>
    <Route path="/calendar" component={Main}/>
    <Route path="/heatmaps" component={HeatMaps} />
  </Router>
);

export default routes;
