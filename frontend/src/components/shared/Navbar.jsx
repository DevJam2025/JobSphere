import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBriefcase, FiSearch, FiLogIn, FiUserPlus, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-gradient-to-r from-pink-400 to-purple-700 shadow-2xl py-5 sticky top-0 z-20'>
            <div className='container mx-auto flex justify-between items-center h-20 px-8 md:px-16'>
                <h1 className='text-5xl font-extrabold text-white tracking-wider drop-shadow-lg'>
                    Job<span className='text-yellow-300'>Sphere</span>
                </h1>
                
                <ul className='flex space-x-12 text-white font-semibold text-lg'>
                    <li className='flex items-center gap-3 px-4 py-2 rounded-lg hover:text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 cursor-pointer'>
                        <FiHome size={24} /> <Link to='/'>Home</Link>
                    </li>
                    <li className='flex items-center gap-3 px-4 py-2 rounded-lg hover:text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 cursor-pointer'>
                        <FiBriefcase size={24} /> <Link to='/jobs'>Jobs</Link>
                    </li>
                    <li className='flex items-center gap-3 px-4 py-2 rounded-lg hover:text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 cursor-pointer'>
                        <FiSearch size={24} /> <Link to='/browse'>Browse</Link>
                    </li>
                </ul>
                
                <div className='flex items-center space-x-6 relative'>
                    <Link to='/authlogin' className='flex items-center gap-3 px-6 py-3 border border-white rounded-full text-white bg-opacity-50 backdrop-blur-md hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl'>
                        <FiLogIn size={24} /> Login
                    </Link>
                    <Link to='/auth/signup' className='flex items-center gap-3 px-6 py-3 bg-yellow-300 text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl'>
                        <FiUserPlus size={24} /> Signup
                    </Link>
                    
                    <div className='relative'>
                        <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-3 px-4 py-2 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300'>
                            <FiUser size={24} /> Profile
                        </button>
                        {isOpen && (
                            <div className='absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg py-3 text-gray-700'>
                                <Link to='/profile' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-200 transition-all'><FiUser size={20} /> View Profile</Link>
                                <Link to='/settings' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-200 transition-all'><FiSettings size={20} /> Settings</Link>
                                <button className='w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-200 transition-all text-left'>
                                    <FiLogOut size={20} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
