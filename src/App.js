import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Authcontext";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from './pages/ForgotPassword';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employees />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
