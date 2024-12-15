import React from "react";
import { useAuth } from "../../contexts/Authcontext";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Employee Management System</span>
            </div>

            <div className="flex items-center">
              <span className="mr-4">{user?.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
