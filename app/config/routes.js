import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="/calendar" component={Main} />
    </Route>
  </Router>
);

export default routes;
