import React from "react";
import { Route, Router, hashHistory } from "react-router";
import Main from "../components/Main";
import container from "../containers/container";
import HeatMaps from "../components/HeatMaps";

const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={container}/>
      <Route path="/calendar" component={Main}/>
      <Route path="/heatmaps" component={HeatMaps}/>
    </Router>
);

export default routes;
