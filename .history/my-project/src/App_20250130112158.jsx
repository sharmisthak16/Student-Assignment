import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard'; // Create this component for the dashboard page

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
