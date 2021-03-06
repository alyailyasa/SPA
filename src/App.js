import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Page/Login/Login';
import UserLists from './Page/UserLists/UserLists';
import Details from './Page/Details/Details';
import Error from './Page/404/Error';
import './Style.scss';

function App() {
return (
  <Router>
    <Switch>
      <Route path={["/"]} exact key="Login" component={Login}/>
      <Route path={["/users"]} exact key="UserLists" component={UserLists}/>
      <Route path={["/users/:id"]} exact key="Details" component={Details}/>
      <Route path={["*"]} exact key="Error" component={Error}/>
    </Switch>
  </Router> 
);
}

export default App;