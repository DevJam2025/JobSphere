// EditProfile.js
import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    fullname: user.fullname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    bio: user.bio,
    skills: user.skills.join(', '),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/user/profile', {
        ...formData,
        skills: formData.skills.split(',').map((skill) => skill.trim()),
      });
      onUpdate(response.data.user);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </label>
      <label>
        Skills (comma-separated):
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfile;
