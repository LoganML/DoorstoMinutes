import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./components/Tables/Tables.js";
;

const App = () => (
  <Router>
    <div>
      <Route exact path="/table" component={Table} />
     
    </div>
  </Router>
);







export default App;