import React, { useState } from "react";
import { FaCamera, FaUpload, FaCheckCircle } from "react-icons/fa";

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file.name);
    }
  };

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
    // Implement backend API call to save the profile
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 to-blue-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit Profile</h2>

        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center relative">
          <label className="cursor-pointer relative">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 shadow-md"
              />
            ) : (
              <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-semibold">
                <FaCamera size={30} />
              </div>
            )}
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="text" placeholder="College Name" value={college} onChange={(e) => setCollege(e.target.value)} className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300" />
        </div>

        {/* Resume Upload */}
        <div className="mt-6">
          <label className="block text-gray-700 font-semibold">Upload Resume:</label>
          <div className="mt-3 flex items-center gap-3">
            <input type="file" className="hidden" id="resumeUpload" onChange={handleResumeUpload} />
            <label htmlFor="resumeUpload" className="bg-indigo-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-600 transition text-sm flex items-center gap-2">
              <FaUpload /> Choose File
            </label>
            {resume && <span className="text-gray-700 text-sm flex items-center gap-1"><FaCheckCircle className="text-green-500" /> {resume}</span>}
          </div>
        </div>

        {/* Save Profile Button */}
        <button onClick={handleSaveProfile} className="w-full mt-8 bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

// // ProfilePage.js
// import React, { useState } from 'react';
// import UserProfile from './UserProfile';
// import EditProfile from './EditProfile';

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState(null);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleUpdate = (updatedUser) => {
//     setUser(updatedUser);
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <EditProfile user={user} onUpdate={handleUpdate} />
//       ) : (
//         <>
//           <UserProfile user={user} />
//           <button onClick={handleEditClick}>Edit Profile</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
