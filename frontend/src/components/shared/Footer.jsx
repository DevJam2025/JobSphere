import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-indigo-300 to-pink-300 text-white py-4 w-full'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
                
                {/* Logo & Tagline */}
                <div className='text-center md:text-left'>
                    <h2 className='text-xl font-semibold tracking-wider'>Job<span className='text-yellow-300'>Sphere</span></h2>
                    <p className='text-black-500 mt-2'>Find your dream job with ease.</p>
                </div>
                
                {/* Navigation Links */}
                <div className='text-center'>
                    <h3 className='text-md font-semibold mb-2'>Quick Links</h3>
                    <ul className='space-y-1 text-white-400'>
                        <li className='hover:text-yellow-300 transition duration-300'><Link to='/'>Home</Link></li>
                        <li className='hover:text-yellow-300 transition duration-300'><Link to='/jobs'>Jobs</Link></li>
                        <li className='hover:text-yellow-300 transition duration-300'><Link to='/browse'>Browse</Link></li>
                        <li className='hover:text-yellow-300 transition duration-300'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                
                {/* Social Media Icons */}
                <div className='text-center md:text-right'>
                    <h3 className='text-md font-semibold mb-2'>Follow Us</h3>
                    <div className='flex justify-center md:justify-end space-x-3'>
                        <a href='#' className='text-blue-500 hover:text-yellow-300 transition duration-300'><FiFacebook size={18} /></a>
                        <a href='#' className='text-blue-400 hover:text-yellow-300 transition duration-300'><FiTwitter size={18} /></a>
                        <a href='#' className='text-pink-400 hover:text-yellow-300 transition duration-300'><FiInstagram size={18} /></a>
                        <a href='#' className='text-blue-400 hover:text-yellow-300 transition duration-300'><FiLinkedin size={18} /></a>
                    </div>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className='border-t border-gray-700 mt-4 pt-3 text-center text-gray-500 text-xs w-full'>
                &copy; {new Date().getFullYear()} JobSphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
