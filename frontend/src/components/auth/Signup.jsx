import React from 'react';

// import Navbar from '../shared/Navbar';

function Signup() {
  return (
    <div className="w-full min-h-screen bg-gray-100">

      <div className="p-5 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg?t=st=1738566306~exp=1738569906~hmac=64ce19e2955a0dadbf8696526286efa02b11c4fc2c20786a6c5d041d1a756f48&w=1060)', height: '300px' }}></div>

      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg mt-[-100px] rounded-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-5">Sign up now</h2>

        <div className="grid grid-cols-2 gap-4">
          <input className="p-2 border rounded" type="text" placeholder="First name" />
          <input className="p-2 border rounded" type="text" placeholder="Last name" />
        </div>

        <input className="w-full p-2 border rounded mt-4" type="email" placeholder="Email" />
        <input className="w-full p-2 border rounded mt-4" type="password" placeholder="Password" />

        <div className="flex items-center justify-center mt-4">
          <input type="checkbox" id="subscribe" className="mr-2" />
          <label htmlFor="subscribe">Subscribe to our newsletter</label>
        </div>

        <button className="w-full bg-blue-600 text-white p-2 rounded mt-4">Sign up</button>

        <div className="text-center mt-4">
          <p>or sign up with:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="text-blue-600">Facebook</button>
            <button className="text-blue-600">Twitter</button>
            <button className="text-blue-600">Google</button>
            <button className="text-blue-600">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
