import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route path="/">
        <About />
      </Route>
      <Route path="/comments">
        <Users />
      </Route>
    </Switch>
  );
}

export default App;
