import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access route params
import { getEmployeeDetails } from "../services/api";
import "../components/styles/EmployeeDetails.css";
import Navbar from "../components/Navbar";

const EmployeeDetailsPage = () => {
  const { id } = useParams(); // Get employee ID from the URL
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const data = await getEmployeeDetails(id); // Fetch employee data from API
        setEmployee(data);
      } catch (error) {
        setError("Error fetching employee details");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, [id]); // Fetch employee details when the id changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="employee-details-container">
        <h1>Employee Details</h1>
        {employee ? (
          <div className="employee-card">
            <div className="employee-card-header">
              <h2>{employee.first_name} {employee.last_name}</h2>
            </div>
            <div className="employee-card-body">
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Salary:</strong> ${employee.salary}</p>
              <p><strong>Date of Joining:</strong> {new Date(employee.date_of_joining).toLocaleDateString()}</p>
              <p><strong>Department:</strong> {employee.department}</p>
            </div>
          </div>
        ) : (
          <p>Employee not found</p>
        )}
        
      </div>
    </>
  );
};

export default EmployeeDetailsPage;
