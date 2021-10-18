import React from 'react';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const authenticated = localStorage.getItem('token');

function App() {
  return (
    <div className="App">
            <HashRouter>
              <Switch>
              <Route path="/" 
                  exact
                  render={(props) =>
                    (
                      <Redirect
                        to={{
                          pathname: authenticated? '/dashboard' : '/login',
                          state: { from: props.location },
                        }}
                      />
                    )
                  }></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/dashboard" 
                  exact
                  render={(props) =>
                    authenticated ? (
                      <Dashboard {...props} />
                    ) : (
                      <Redirect
                        to={{
                          pathname: '/login',
                          state: { from: props.location },
                        }}
                      />
                    )
                  }></Route>
              </Switch>
            </HashRouter>
       {/* <Login /> */}
    </div>
  );
}

export default App;
