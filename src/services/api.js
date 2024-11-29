import axios from 'axios';

// Set the base URL for the API
const BASE_URL = 'http://localhost:5000/api/v1'; // Base URL for the API

// Axios instance for API calls
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios request interceptor to add the token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    console.log('Token in header:', token); // Debugging the token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add the token to the request header
    }

    // Log request info for debugging
    console.log('Request:', config);

    return config; // Return the config to continue with the request
  },
  (error) => {
    // Log error details for debugging
    console.error('Request error:', error);
    return Promise.reject(error); // Handle any errors in the request setup
  }
);

// Axios response interceptor to handle token expiration or errors globally
api.interceptors.response.use(
  (response) => {
    return response; // Return response data if successful
  },
  (error) => {
    // Log error response for debugging
    console.error('Response error:', error.response);

    if (error.response && error.response.status === 401) {
      // Unauthorized, possible token expiration or missing token
      console.log('Token expired or unauthorized access');
      // You can perform logout here or handle token expiration
    }

    return Promise.reject(error); // Return the error to be handled by the calling function
  }
);

// Authentication API Calls

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/user/login', { email, password });
    console.log('Login response:', response.data); // Debugging the login response
    return response.data; // Response will contain the user token and other data
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw the error so the component can handle it
  }
};

// Signup User
export const signupUser = async (username, email, password) => {
  try {
    const response = await api.post('/user/signup', { username, email, password });
    console.log('Signup response:', response.data); // Debugging the signup response
    return response.data; // Response will contain the user data and token
  } catch (error) {
    console.error('Signup error:', error);
    throw error; // Re-throw the error
  }
};

// Employee Management API Calls

// Get All Employees
export const getAllEmployees = async () => {
  try {
    const response = await api.get('/emp/employees');
    console.log('Get employees response:', response.data); // Debugging the response
    return response.data; // Return employee list
  } catch (error) {
    console.error('Get employees error:', error);
    throw error; // Re-throw the error
  }
};

// Add New Employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await api.post('/emp/employees', employeeData);
    console.log('Add employee response:', response.data); // Debugging the response
    return response.data; // Return the added employee data
  } catch (error) {
    console.error('Add employee error:', error);
    throw error; // Re-throw the error
  }
};

// Get Employee Details
export const getEmployeeDetails = async (employeeId) => {
  try {
    const response = await api.get(`/emp/employees/${employeeId}`);
    console.log('Get employee details response:', response.data); // Debugging the response
    console.log(response.data); // Return the
    return response.data; // Return employee details
  } catch (error) {
    console.error('Get employee details error:', error);
    throw error; // Re-throw the error
  }
};

// Update Employee Information
export const updateEmployee = async (employeeId, updatedData) => {
  try {
    const response = await api.put(`/emp/employees/${employeeId}`, updatedData);
    console.log('Update employee response:', response.data); // Debugging the response
    return response.data; // Return updated employee data
  } catch (error) {
    console.error('Update employee error:', error);
    throw error; // Re-throw the error
  }
};

// Delete Employee
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await api.delete(`/emp/employees?eid=${employeeId}`);
    console.log('Delete employee response:', response.data); // Debugging the response
    return response.data; // Return confirmation of deletion
  } catch (error) {
    console.error('Delete employee error:', error);
    throw error; // Re-throw the error
  }
};

// Search Employees (filter by department or position)
export const searchEmployees = async (searchCriteria) => {
  try {
    const response = await api.get('/emp/employees', { params: searchCriteria });
    console.log('Search employees response:', response.data); // Debugging the response
    return response.data; // Return filtered employee list
  } catch (error) {
    console.error('Search employees error:', error);
    throw error; // Re-throw the error
  }
};

export default api;
