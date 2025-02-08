import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate=useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { fullname, email, phoneNumber, password, role };
    
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          
         },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      
      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage('');
        setTimeout(()=>{
          navigate("/login");
        },2000);
      } else {
        
        setErrorMessage(data.message);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Something went wrong, please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-pink-200 to-gray-550 animate-gradient" />
      
      {/* Glassmorphic Signup Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-xl max-w-lg w-full border border-white/20"
      >
        <h2 className="text-2xl font-bold text-black text-center mb-6">Create an Account</h2>
        {errorMessage && <div className="text-red-400 text-center mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-400 text-center mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-black-800" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
          <input className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-black-800" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-black-800" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          <input className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-black-800" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <select className="w-full p-3 bg-black/20 text-gray rounded-lg border border-white/30 placeholder-white-300 focus:outline-none focus:ring-2 focus:ring-black-800" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" >Select Role</option>
            <option value="student" >Student</option>
            <option value="recruiter" >Recruiter</option>
          </select>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Sign Up</button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;