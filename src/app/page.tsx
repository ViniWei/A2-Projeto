import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;