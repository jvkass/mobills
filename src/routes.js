import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Login from './pages/Login/login';
import Medicos from './pages/Receitas/receitas';
export default function routes() {
    return (
      <Router>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>  
            <Route path="/receitas">
              <Medicos/>
            </Route>                       
          </Switch>
      </Router>
    );
  }
