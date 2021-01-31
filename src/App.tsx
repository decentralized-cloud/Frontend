import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import logo from './logo.svg';
import './App.css';
import { getStore } from './framework/redux';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';
import Dashboard from './components/dashborad';
import { Profile } from './views';
import ProtectedRoute from './auth/protected-route';

// const history = createBrowserHistory();
// const store = getStore(history);

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
