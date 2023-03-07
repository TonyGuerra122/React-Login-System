import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginForm/>
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
