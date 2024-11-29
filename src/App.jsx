import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EmployeePage from "./pages/EmployeePage";
import { AuthProvider } from "./context/AuthContext";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import LandingPage from "./pages/LandingPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import UpdateEmployeePage from "./pages/UpdateEmployeePage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/employee/:id" element={<EmployeeDetailsPage />} /> 
          <Route path="/employee/form" element={<CreateEmployeePage />} />
          <Route path="/employee/form/:id" element={<UpdateEmployeePage />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
