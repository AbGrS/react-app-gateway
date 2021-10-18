import React from 'react';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

const authenticated = localStorage.getItem('token');

function App() {
  return (
    <div className="App">
            <HashRouter>
              <Switch>
              <Route path={routes.HOME} 
                  exact
                  render={(props) =>
                    (
                      <Redirect
                        to={{
                          pathname: authenticated? routes.DASHBOARD : routes.LOGIN,
                          state: { from: props.location },
                        }}
                      />
                    )
                  }></Route>
                <Route exact path={routes.LOGIN} component={Login}></Route>
                <Route path={routes.DASHBOARD}
                  exact
                  render={(props) =>
                    authenticated ? (
                      <Dashboard {...props} />
                    ) : (
                      <Redirect
                        to={{
                          pathname: routes.LOGIN,
                          state: { from: props.location },
                        }}
                      />
                    )
                  }></Route>
              </Switch>
            </HashRouter>
    </div>
  );
}

export default App;
