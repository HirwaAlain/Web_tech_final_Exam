import { useState, useEffect } from "react";
import Table from "../common/Table";
import EmployeeForm from "./EmployeeForm";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Mock data - will be replaced with API calls
  useEffect(() => {
    setEmployees([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        department: "IT",
        position: "Developer",
        status: "Active",
      },
      // ... more employees
    ]);

    setDepartments(["IT", "HR", "Finance", "Marketing"]);
  }, []);

  const handleAddEmployee = (data) => {
    // Handle adding employee
    console.log('New employee:', data);
    setShowModal(false);
  };

  const columns = [
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Department", key: "department" },
    { header: "Position", key: "position" },
    { header: "Status", key: "status" },
    {
      header: "Actions",
      key: "actions",
      render: (employee) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(employee.id)}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(employee.id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    // Will be implemented with backend
    console.log("Edit employee:", id);
  };

  const handleDelete = (id) => {
    // Will be implemented with backend
    console.log("Delete employee:", id);
  };

  const filteredEmployees = selectedDepartment
    ? employees.filter((emp) => emp.department === selectedDepartment)
    : employees;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          onClick={() => {
            setShowModal(true)
          }}
        >
          Add Employee
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
            <EmployeeForm 
              onSubmit={handleAddEmployee}
              onClose={() => setShowModal(false)}
              isModal={true}
            />
          </div>
        </div>
      )}

      <div className="mb-4">
        <select
          className="border rounded-md px-3 py-2"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <Table columns={columns} data={filteredEmployees} searchable={true} />
    </div>
  );
};

export default EmployeeList;
