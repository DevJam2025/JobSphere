import React, { useState } from 'react';

function Signup() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the form data
    const formData = {
      fullname,
      email,
      phoneNumber,
      password,
      role,
    };

    // Make the API call to your backend for signup
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage('');
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
    <div className="w-full min-h-screen bg-gray-100">
      <div className="p-5 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg?t=st=1738566306~exp=1738569906~hmac=64ce19e2955a0dadbf8696526286efa02b11c4fc2c20786a6c5d041d1a756f48&w=1060)', height: '300px' }}></div>

      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg mt-[-100px] rounded-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-5">Sign up now</h2>

        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="Full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              className="p-2 border rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <input
            className="w-full p-2 border rounded mt-4"
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

<select
  className="w-full p-2 border rounded mt-4"
  value={role}
  onChange={(e) => setRole(e.target.value)}
>
  <option value="">Select Role</option>
  <option value="student">student</option>
  <option value="recruiter">recruiter</option>
</select>


          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-4">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
