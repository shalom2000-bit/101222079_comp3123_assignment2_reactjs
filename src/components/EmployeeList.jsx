import React from "react";
import "../components/styles/Employees-list.css";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../services/api";

const EmployeeList = ({ employeesData, loading, fetchEmployees }) => {
 
   // Handle Delete Confirmation
   const handleDelete = async (employeeId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
    
    if (isConfirmed) {
      try {
        // Call deleteEmployee from api.js to delete from DB
        await deleteEmployee(employeeId);
        // Fetch employees after deletion
        fetchEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("There was an error deleting the employee.");
      }
    }
  };
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (employeesData.length === 0) {
    return <div className="no-employees">No employees found.</div>;
  }

  return (
    <div className="">
      <h1 className="table-title">Employee List</h1>
      <button className="action-btn add-employee-btn">
        <Link to="/employee/form" className="action-btn add-employee-btn">
          Add Employee
        </Link>
      </button>

      {/* Employee Table */}
      <table className="employee-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Department</th>
            <th className="table-header">Position</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee) => (
            <tr key={employee._id} className="table-row">
              <td className="table-cell">{employee.first_name}</td>
              <td className="table-cell">{employee.department}</td>
              <td className="table-cell">{employee.position}</td>
              <td className="table-cell actions-cell">
                <Link
                  className="action-btn view-btn"
                  to={`/employee/${employee._id}`}
                >
                  View
                </Link>
                <Link
                  className="action-btn edit-btn"
                  to={`/employee/form/${employee._id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(employee._id)} // Call handleDelete instead of directly onDelete
                  className="action-btn delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
