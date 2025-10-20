import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log("Admin login attempted");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white p-4">
      <div className="mt-24 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-[var(--green)] mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleAdminLogin} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Enter admin username"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--green)] text-white py-3 rounded-xl hover:bg-[var(--light-green)] hover:text-[var(--green)] transition font-medium shadow-md"
          >
            Login
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate("/login")}
          className="mt-5 w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition font-medium border border-gray-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;