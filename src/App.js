import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterPage from "./Routes/counterPage";
import PageNotFound from "./Routes/pageNotFound";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/error">Error Boundary Test</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<CounterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
