import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Layout from "./components/layout"

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <Layout>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <p>About</p>
              </Route>
              <Route path="/users">
                <p>Users</p>
              </Route>
              <Route path="/">
                <p>Home</p>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    </div>
  )
}

export default App
