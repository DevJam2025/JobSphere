import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Browse from './components/Browse';
import Home from './components/home';
import Profile from './components/profile';
function App() {
  return (
    <>
     <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/jobs" element={<h1>Jobs Page</h1>} />
        <Route path="/browse" element={<Browse/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
