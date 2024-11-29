import React, { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import { getAllEmployees } from "../services/api";
import Navbar from "../components/Navbar";
import "../components/styles/Employees.css";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch employees from the API
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await getAllEmployees();
      setEmployees(data); // Set fetched employees
    } catch (err) {
      setError("Error fetching employee data");
      console.error("Error fetching employee data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees(); // Fetch employees on initial load
  }, []);

  return (
    <div className="">
      <Navbar />
      {/* Error message */}
      {error && (
        <div className="text-red-500 text-xl text-center mb-4">{error}</div>
      )}

      <div className="employee-list-container">
        {/* Employee List */}

        <EmployeeList
          employeesData={employees}
          loading={loading}
          fetchEmployees={fetchEmployees}
        />
      </div>
    </div>
  );
};

export default EmployeePage;
