import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/home";
import Reports from "./views/reports";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/reports" component={Reports}></Route>
        </Switch>
      </div>
    </Router>
  );
}
