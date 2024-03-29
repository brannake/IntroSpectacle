// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import reducer from './reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import containerLogin from "./containers/containerLogin";
import containerMain from "./containers/containerMain";
import containerTrends from "./containers/containerTrends";
import containerAbout from "./containers/containerAbout";

const store = createStore(reducer);

const superRender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div id="route-packager">
                    <Route path="/" component={containerLogin} />
                    <Route path="/calendar" component={containerMain} />
                    <Route path="/trends" component={containerTrends} />
                    <Route path="/about" component={containerAbout} />
                </div>
            </BrowserRouter>
     </Provider>, document.getElementById("app"));
};

superRender();
store.subscribe(superRender);

