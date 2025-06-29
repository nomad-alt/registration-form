import { useState } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

const PasswordErrorMessage = () => {
  const { theme } = useTheme();
  return (
    <p className={`FieldError ${theme}`}>Password should have at least 8 characters</p>
  )
}

function ThemedApp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const { theme, toggleTheme } = useTheme();

  const getIsFormValid = () => {
    return (
      firstName.trim() !== "" &&
      email.includes("@") &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    }
  };

  return (
    <div className={`App ${theme}`}>
      <div className="theme-switcher">
        <button 
          type="button" 
          onClick={toggleTheme}
          className={`theme-button ${theme}`}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <fieldset className={theme}>
          <h2>Sign Up</h2>
          <div className='Field'>
            <label className={theme}>
              First Name <sup>*</sup>
            </label>
            <input 
              className={theme}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First Name' 
            />
          </div>
          <div className='Field'>
            <label className={theme}>Last Name</label>
            <input 
              className={theme}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last Name' 
            />
          </div>
          <div className='Field'>
            <label className={theme}>
              Email address <sup>*</sup>
            </label>
            <input 
              className={theme}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address' 
            />
          </div>
          <div className='Field'>
            <label className={theme}>
              Password <sup>*</sup>
            </label>
            <input 
              className={theme}
              type='password'
              value={password.value}
              onChange={(e) => setPassword({...password, value: e.target.value})}
              onBlur={() => setPassword({...password, isTouched: true})}
              placeholder='Password' 
            />
            {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
          </div>
          <div className='Field'>
            <label className={theme}>
              Role <sup>*</sup>
            </label>
            <select
              className={theme}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button 
            type='submit' 
            className={`submit-button ${theme}`}
            disabled={!getIsFormValid()}
          >
            Create Account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;