import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Activities from './Activities';
import Learn from './Learn';
import Resources from './Resources';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/learn">
          <Learn />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
