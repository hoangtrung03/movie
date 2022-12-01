import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
const App = () => {
  return (
    <div>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
};

export default App;
