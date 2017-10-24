module.exports = function(app) {

    function handleRender(req, res) {
        
          const params = qs.parse(req.query)
          const counter = parseInt(params.counter, 10) || 0
        
          // Compile an initial state
          let preloadedState = {counter}
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
  }
