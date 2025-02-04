import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'New York, USA' },
  { id: 2, title: 'Backend Engineer', company: 'Amazon', location: 'San Francisco, USA' },
  { id: 3, title: 'UI/UX Designer', company: 'Apple', location: 'London, UK' },
  { id: 4, title: 'Data Analyst', company: 'Microsoft', location: 'Seattle, USA' },
  { id: 5, title: 'Frontend Developer', company: 'Amazon', location: 'Bengaluru,Karnataka' },
  { id: 6, title: 'Data Analyst', company: 'Microsoft', location: 'San Francisco, USA' },
  { id: 7, title: 'Technical Writer', company: 'TCS', location: 'Indore,M.P.' },
  { id: 8, title: 'Technical Writer', company: 'Infosys', location: 'Pune,Maharastra' },
   { id: 9, title:'Technical Writer', company: 'Wipro', location: 'Pune,Maharastra' },
  { id: 10, title:'Technical Writer', company: 'Microsoft', location: 'Bengaluru,Karnataka' },
];

function Browse() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white bg-[url('https://wallpaperaccess.com/full/1393442.jpg')] bg-cover bg-center">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">Browse Jobs</h2>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <FiSearch className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by job title..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="mt-8 grid gap-6 shadow-md hover:shadow-xl">
          {jobs.filter(job =>
            job.title.toLowerCase().includes(search.toLowerCase()) &&
            job.location.toLowerCase().includes(location.toLowerCase())
          ).map((job) => (
            <motion.div
              key={job.id}
              className="p-4 bg-gray-700 bg-opacity-50 rounded-lg shadow-md hover:bg-gray-600 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-300 flex items-center gap-2">
                <FiBriefcase /> {job.company}
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <FiMapPin /> {job.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;