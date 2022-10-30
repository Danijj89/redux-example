import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { CommentsContextProvider } from './react-hooks-example/CommentsContextProvider';
import { Home } from './react-hooks-example/Home';
import { ReduxHome } from './redux-example/ReduxHome';


function App() {
  return (
    <Router>
      <CommentsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<ReduxHome />} />
      </Routes>
      </CommentsContextProvider>
    </Router>
  );
}

export default App;
