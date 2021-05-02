import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Activities from './Activities';
import Learn from './Learn';
import Resources from './Resources';
import Register from './Register';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Header />
      <Container>

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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Container>


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
