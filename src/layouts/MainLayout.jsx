import NavBar from "../components/common/NavBar";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 overflow-auto p-6">{children || <Outlet />}</main>
      </div>
    </div>
  );
};

export default MainLayout;
