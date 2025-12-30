// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react'; // Icons
import { mockStudent } from '../mockData'; // Your fake data
import './Login.css'; // Import the CSS we just made
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    await login({ rollNumber });
    navigate("/dashboard");
  } catch (err) {
    setError("Student not found. Please check roll number.");
  }
};



  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* Title */}
        <h1 className="login-title">USER LOGIN</h1>

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          
          {/* Username Input (Icon Left) */}
          <div className="input-group">
            <div className="icon-circle icon-left">
              <User size={24} strokeWidth={2.5} />
            </div>
            <input 
              type="text" 
              className="custom-input input-left"
              placeholder="Username / Roll No"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </div>

          {/* Password Input (Icon Right) */}
          <div className="input-group">
            <input 
              type="password" 
              className="custom-input input-right"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="icon-circle icon-right">
              <Lock size={24} strokeWidth={2.5} />
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            LOGIN
          </button>

        </form>

        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
};

export default Login;