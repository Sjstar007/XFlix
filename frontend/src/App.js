import logo from './logo.svg';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import './App.css';

export const config = {
  endpoint: 'https://f5a71a5c-fdfd-4c67-94e0-6e9cf9796105.mock.pstmn.io/v1',
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/video/:id">
          <Video />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
