// App.js
import React from "react";
import "./App.css";

import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Card from "./component/Card";
import ChosePage from "./page/ChosePage";
import CardLayout from "./page/CardLayout";

function App() {
  return (
    <Router>
      <CardLayout>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/newpage/:cardContent" element={<ChosePage />} />
        </Routes>
      </CardLayout>
    </Router>
  );
}

export default App;
