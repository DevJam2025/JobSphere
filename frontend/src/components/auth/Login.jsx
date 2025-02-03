import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      role,
    };

    try {
      const response = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Login successful! Welcome back, ${data.user.fullname}.`);
        // Optionally, redirect the user to another page after successful login
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div
        className="p-5 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg?t=st=1738566306~exp=1738569906~hmac=64ce19e2955a0dadbf8696526286efa02b11c4fc2c20786a6c5d041d1a756f48&w=1060)',
          height: '300px',
        }}
      ></div>

      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg mt-[-100px] rounded-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-5">Log in</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border rounded mt-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="w-full p-2 border rounded mt-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="student">student</option>
            <option value="recruiter">recruiter</option>
          </select>

          <button className="w-full bg-blue-600 text-white p-2 rounded mt-4" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
