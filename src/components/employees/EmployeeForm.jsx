import { useState } from "react";

const EmployeeForm = ({ onSubmit, onClose, isModal = false }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    position: "",
    startDate: "",
    salary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className={`${
        isModal
          ? "p-6"
          : "max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-6"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          {isModal && (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
