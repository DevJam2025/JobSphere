import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true, // Ensure cookies are included
      });

      alert("Logged out successfully!");
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
      alert("Logout failed. Please try again.");
    }
  };

  return logout;
};

export default useLogout;