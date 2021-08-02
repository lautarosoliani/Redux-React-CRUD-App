import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
