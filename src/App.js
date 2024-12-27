import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Edit from "./components/Edit";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Edit />} />
        <Route path="/edit/:id" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
