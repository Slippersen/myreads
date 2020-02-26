import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/search" component={SearchPage} />
        <Route
          render={() => (
            <>
              <p>There's nothing here.</p>
              <Link to="/">Go home</Link>
            </>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
