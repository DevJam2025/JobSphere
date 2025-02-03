import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Router>
                <Navbar />
                
                {/* Main content area grows to push footer down */}
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<h1>Home Page</h1>} />
                        <Route path="/jobs" element={<h1>Jobs Page</h1>} />
                        <Route path="/browse" element={<h1>Browse Page</h1>} />
                        <Route path="/login" element={<h1>Login Page</h1>} />
                        <Route path="/signup" element={<h1>Signup Page</h1>} />
                    </Routes>
                </div>
                
                <Footer />
            </Router>
        </div>
    );
}

export default App;
