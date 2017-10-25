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
import reducer from './app/reducers/reducer';
import {renderToString} from 'react-dom/server';
import containerMain from './app/containers/containerMain';
  
  function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <meta charset="UTF-8">
        <title>Introspectacle!</title>
        <!-- Here we include bootstrap and font-awesome. These will be made available to all of the generated HTML/JS that React generates-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="/css/styles.css">
      </head>
      <body>
      <div>
        <div id="app">${html}</div>
        </div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
  }

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

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// React Server-Side Rendering
// =============================================================
app.get('*', function handleRender(req, res) {
  
  console.log(req.body);

    const params = qs.parse(req.query)
    const user = parseInt(params.counter, 10) || 0
  
    // Compile an initial state
    let preloadedState = {user}
    // Create a new Redux store instance
    const store = createStore(reducer, preloadedState)
    
      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <containerMain />
        </Provider>
      )
    
      // Grab the initial state from our Redux store
      const finalState = store.getState()
    
      // Send the rendered page back to the client
      res.send(renderFullPage(html, preloadedState))
  });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
