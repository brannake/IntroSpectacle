// *** Dependencies
// =============================================================
var express = require("express");
var fileUpload = require('express-fileupload');
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require('express-session');

import qs from 'qs'
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './app/reducers';
import {renderToString} from 'react-dom/server';
import containerMain from './app/containers/containerMain';

var app = express();

app.use(session({secret: 'keyboard cat'}))

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8086;

// Requiring our models for syncing
var db = require("./models");

require('./config/passport')(passport)

// Sets up the Express app to handle data parsing
// Static directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(passport.initialize());
app.use(passport.session());

// React Server-Side Rendering
// =============================================================
app.use(handleRender);

function handleRender(req, res) {

  const params = qs.parse(req.query)
  const counter = parseInt(params.counter, 10) || 0

  // Compile an initial state
  let preloadedState = {counter}
  // Create a new Redux store instance
  const store = createStore(reducer)
  
    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <containerMain />
      </Provider>
    )
  
    // Grab the initial state from our Redux store
    const preloadedState = store.getState()
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `
}

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
