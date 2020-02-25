import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={DashboardPage} />
      <Route path="/search" component={SearchPage} />
    </div>
  );
};

export default App;
