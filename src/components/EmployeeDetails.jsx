import React from 'react';

const EmployeeDetails = ({ employee, onClose }) => {
  if (!employee) {
    return null; // Render nothing if no employee data is passed
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Employee Details
        </h2>

        {/* Employee Details */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{employee.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Department:</span>
            <span>{employee.department}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Position:</span>
            <span>{employee.position}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{employee.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Phone:</span>
            <span>{employee.phone}</span>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            aria-label="Close employee details"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
