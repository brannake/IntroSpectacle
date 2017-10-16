// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { Route, Router, hashHistory } from "react-router";
import container from "./containers/container";
import containerdeux from "./containers/containerdeux";

const store = createStore(reducer);

const superRender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={container}/>
                <Route path="/calendar" component={containerdeux}/>
            </Router>
     </Provider>, document.getElementById("app"));
};

superRender();
store.subscribe(superRender);

