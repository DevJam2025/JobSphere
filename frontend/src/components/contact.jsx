import { FiPhone, FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import pushkarImg from "../images/pushkar.png";
import deepikaImg from "../images/deepika.jpg";
import himaniImg from "../images/himani.jpg";
import venuakImg from "../images/venuka.png";

const contacts = [
  {
    id: 1,
    name: "Himani Goyal",
    role: "Founder & CEO",
    email: "himani764@gmail.com",
    phone: "7678266951",
    image: himaniImg,
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    github: "https://github.com/alexjohnson",
  },
  {
    id: 2,
    name: "Deepika Agrawal",
    role: "Head of HR",
    email: "agrdeepika25@gmail.com",
    phone: "8839396823",
    image: deepikaImg,
    linkedin: "https://linkedin.com/in/sophiawilliams",
    twitter: "https://twitter.com/sophiawilliams",
    github: "https://github.com/sophiawilliams",
  },
  {
    id: 3,
    name: "Venuka Dewangan",
    role: "Lead Developer",
    email: "dewanganvenu20@gmail.com",
    phone: "6265094888",
    image: venuakImg,
    linkedin: "https://linkedin.com/in/michaelsmith",
    twitter: "https://twitter.com/michaelsmith",
    github: "https://github.com/michaelsmith",
  },
  {
    id: 4,
    name: "Pushkar Shinde",
    role: "Marketing Manager",
    email: "pushkarshinde@gmail.com",
    phone: "9356665641",
    image: pushkarImg,
    linkedin: "https://linkedin.com/in/emmabrown",
    twitter: "https://twitter.com/emmabrown",
    github: "https://github.com/emmabrown",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {contacts.map((person) => (
          <div
            key={person.id}
            className={`relative p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-500 transition-transform transform hover:scale-105 hover:shadow-xl duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 rounded-2xl transition-all duration-500 blur-xl"></div>

            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg mb-4 mx-auto"
            />

            <h1 className="text-gray-800 text-center mb-4">{person.name}</h1>
            <p className="text-gray-400 text-center mb-4">{person.role}</p>

            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300">
                <FiMail size={18} className="text-blue-400" /> {person.email}
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-300 hover:text-purple-400 transition-all duration-300">
                <FiPhone size={18} className="text-purple-400" /> {person.phone}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                <FiLinkedin size={22} />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-all duration-300">
                <FiGithub size={22} />
              </a>
              <a href={person.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300">
                <FiTwitter size={22} />
              </a>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}