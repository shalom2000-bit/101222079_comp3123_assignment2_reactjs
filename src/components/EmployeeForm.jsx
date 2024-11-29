import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/EmployeeForm.css"; // Import the custom CSS
import { addEmployee, updateEmployee } from "../services/api";

const EmployeeForm = ({ employee }) => {
  const navigate = useNavigate();

   // Format the date string to YYYY-MM-DD if the employee exists
   const formatDate = (date) => {
    if (!date) return "";
    const newDate = new Date(date);
    return newDate.toISOString().split("T")[0]; // Extracts YYYY-MM-DD
  };

  const [formData, setFormData] = useState({
    first_name: employee ? employee.first_name : "",
    last_name: employee ? employee.last_name : "",
    email: employee ? employee.email : "",
    position: employee ? employee.position : "",
    salary: employee ? employee.salary : "",
    date_of_joining: employee ? formatDate(employee.date_of_joining) : "",
    department: employee ? employee.department : "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    salary: "",
    date_of_joining: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First name is required.";
    if (!formData.last_name) newErrors.last_name = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.position) newErrors.position = "Position is required.";
    if (!formData.salary) newErrors.salary = "Salary is required.";
    else if (isNaN(formData.salary) || formData.salary <= 0) {
      newErrors.salary = "Salary must be a positive number.";
    }
    if (!formData.date_of_joining) newErrors.date_of_joining = "Date of joining is required.";
    else if (isNaN(new Date(formData.date_of_joining).getTime())) {
      newErrors.date_of_joining = "Invalid date format.";
    }
    if (!formData.department) newErrors.department = "Department is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Prevent form submission if there are validation errors
    }

    try {
      if (employee) {
        // Update existing employee
        await updateEmployee(employee._id, formData);
      } else {
        // Create new employee
        await addEmployee(formData);
      }
      navigate("/employees"); // Redirect to /employees page
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleCancel = () => {
    // Redirect to the employees page
    navigate("/employees");
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="employee-form-container">
        <div className="center">
          <h1>{employee ? "Update Employee" : "Add Employee"}</h1>
        </div>

        {/* First Name Field */}
        <div className="form-field">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.first_name && <div className="error">{errors.first_name}</div>}
        </div>

        {/* Last Name Field */}
        <div className="form-field">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.last_name && <div className="error">{errors.last_name}</div>}
        </div>

        {/* Email Field */}
        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        {/* Position Field */}
        <div className="form-field">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <input
            id="position"
            name="position"
            type="text"
            value={formData.position}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.position && <div className="error">{errors.position}</div>}
        </div>

        {/* Salary Field */}
        <div className="form-field">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            value={formData.salary}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.salary && <div className="error">{errors.salary}</div>}
        </div>

        {/* Date of Joining Field */}
        <div className="form-field">
          <label htmlFor="date_of_joining" className="form-label">
            Date of Joining
          </label>
          <input
            id="date_of_joining"
            name="date_of_joining"
            type="date"
            value={formData.date_of_joining}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.date_of_joining && <div className="error">{errors.date_of_joining}</div>}
        </div>

        {/* Department Field */}
        <div className="form-field">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            id="department"
            name="department"
            type="text"
            value={formData.department}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          {errors.department && <div className="error">{errors.department}</div>}
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button
            type="button"
            onClick={handleCancel}
            className="form-btn cancel-btn"
          >
            Back
          </button>
          <button type="submit" className="form-btn submit-btn">
            {employee ? "Update Employee" : "Add Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
