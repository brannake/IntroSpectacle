import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import HeatMaps from "../components/HeatMaps";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/heatmaps" component={HeatMaps} />
  </Router>
);

export default routes;
