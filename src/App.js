import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterPage from "./Routes/counterPage";
import PageNotFound from "./Routes/pageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CounterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;