import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./src/page/Login"; // Import the Login component
import Dashboard from "./src/page/Dashboard"; // Example Dashboard component
import SignUp from "./src/page/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the login page */}
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/sign-up" element={<SignUp />} />

        {/* Example Dashboard route (requires user to be logged in) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
