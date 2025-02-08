// UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    bio: '',
    skills: [],
  });

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/Updateprofile'); // Adjust the endpoint as needed
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>{user.fullname}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserProfile;
