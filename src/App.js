import Posts from "./components/Posts";
import InfiniteScrolling from "./components/InfiniteScrolling";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/infinite" element={<InfiniteScrolling />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
