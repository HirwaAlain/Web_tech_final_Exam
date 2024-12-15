import { useState } from "react";
import { useAuth } from "../../contexts/Authcontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [step, setStep] = useState(1); // 1: Login, 2: 2FA
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(credentials);
      if (result) {
        setStep(2); // Move to 2FA step
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleTwoFactor = async (e) => {
    e.preventDefault();
    try {
      // Verify 2FA code - will be connected to backend
      if (twoFactorCode === "123456") {
        // Mock verification
        navigate("/dashboard");
      } else {
        setError("Invalid 2FA code");
      }
    } catch (err) {
      setError("Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {step === 1 ? "Sign in to your account" : "Enter 2FA Code"}
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign in
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleTwoFactor} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter 2FA Code
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={twoFactorCode}
                onChange={(e) => setTwoFactorCode(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Verify
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
