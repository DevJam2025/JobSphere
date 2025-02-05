import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API call to the backend login endpoint
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
          email,
          password,
          role,
        },
        { withCredentials: true } // handle cookies in the request
      );

      if (response.data.success) {
        alert(response.data.message);
        navigate("/home"); // Redirect on successful login
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-pink-200 to-gray-550 animate-gradient" />

      {/* Glassmorphism Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-lg shadow-2xl p-8 rounded-2xl max-w-md w-full border border-white/20"
      >
        <h2 className="text-2xl font-semibold text-black text-center">Welcome Back</h2>
        <p className="text-grey-300 text-center mt-2">Login to continue</p>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-black-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-300 focus:outline-none focus:ring-2 focus:ring-black-800"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white-30 placeholder-white-300 focus:outline-none focus:ring-2 focus:ring-black-800"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Login
          </motion.button>
        </form>

        <a href="#" className="text-gray-600 text-center mt-4">
          Forgot your password?
        </a>
      </motion.div>
    </div>
  );
};

export default Login;
