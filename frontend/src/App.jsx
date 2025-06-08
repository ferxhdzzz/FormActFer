import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

import Books from "./pages/Books";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books/:id?" element={<Books />} />
        
        </Routes>
        <Toaster
        position="top-right"
        toastOptions={{
          className: "app",
          duration: 3000,
          style: {
            fontSize: "16px",
          },
        }}
      />
      </Router>
    </>
  );
}

export default App;
