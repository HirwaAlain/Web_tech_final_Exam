import { useState, useEffect } from "react";
import Stats from "./Stats";
import Table from "../common/Table";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    departments: 0,
  });

  // Mock data - will be replaced with API calls
  const recentActivities = [
    {
      id: 1,
      type: "Leave Request",
      employee: "John Doe",
      status: "Pending",
      date: "2024-03-20",
    },
    {
      id: 2,
      type: "Attendance",
      employee: "Jane Smith",
      status: "Approved",
      date: "2024-03-19",
    },
    // ... more data
  ];

  const columns = [
    { header: "Type", key: "type" },
    { header: "Employee", key: "employee" },
    { header: "Status", key: "status" },
    { header: "Date", key: "date" },
  ];

  useEffect(() => {
    // Mock data loading
    setStats({
      totalEmployees: 150,
      departments: 8,
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Stats title="Total Employees" value={stats.totalEmployees} />
        <Stats title="Departments" value={stats.departments} />
        {/* <Stats title="On Leave" value={stats.onLeave} />
        <Stats title="New Requests" value={stats.newRequests} /> */}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <Table columns={columns} data={recentActivities} searchable={true} />
      </div>
    </div>
  );
};

export default Dashboard;
