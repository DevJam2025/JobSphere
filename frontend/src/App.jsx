import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
