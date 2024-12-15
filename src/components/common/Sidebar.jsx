import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: "📉" },
    { path: "/employees", name: "Employees", icon: "👥" },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 p-2 rounded-md ${
              location.pathname === item.path
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
