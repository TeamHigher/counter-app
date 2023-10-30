import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterPage from "./Routes/counterPage";
import PageNotFound from "./Routes/pageNotFound";

function App() {
  return (
    <Router>
      <nav className="navItems">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
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
