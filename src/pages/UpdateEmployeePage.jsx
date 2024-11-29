import React, { useState, useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom"; // To access route params
import { getEmployeeDetails } from "../services/api"; // assuming this returns a promise

const UpdateEmployeePage = () => {
    const { id } = useParams(); // Get employee ID from the URL
    const [employee, setEmployee] = useState(null); // Default to null until data is fetched
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(null);       // Error state

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const employeeData = await getEmployeeDetails(id); // Await the API call
        setEmployee(employeeData); // Update state with the fetched data
      } catch (error) {
        setError("Error fetching employee details."); // Handle error
      } finally {
        setLoading(false); // Set loading to false when done (success or error)
      }
    };

    if (id) {
      fetchEmployee(); // Call the function to fetch employee details
    }
  }, [id]); // Dependency array ensures the effect runs when employee_id changes

  // Show loading spinner or error message before rendering form
  if (loading) {
    return <div>Loading...</div>; // You can use a spinner or any loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Display error if there's an issue with fetching data
  }

  // If there's no employee data, you could also display a message
  if (!employee) {
    return <div>No employee found.</div>;
  }

  return (
    <>
      <Navbar />
      <EmployeeForm employee={employee} /> {/* Pass relevant props to the EmployeeForm */}
    </>
  );
};

export default UpdateEmployeePage;
