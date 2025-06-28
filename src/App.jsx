import { use, useState } from 'react'
import './App.css'

const PasswordErrorMessage = () => {
  return (
    <p className='FieldError'>Password should have at least 8 characters</p>
  )
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  })
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Validate all required fields
    return (
      firstName.trim() !== "" &&
      email.includes("@") &&
      password.value.length >= 8 &&
      role !== "role"
    )
  }

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    })
    setRole("role");
  }

  const handleSubmit = () => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    }
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className='Field'>
            <label>
              First Name <sup>*</sup>
            </label>
            <input 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First Name' 
            />
          </div>
          <div className='Field'>
            <label>
              Last Name
            </label>
            <input 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last Name' 
            />
          </div>
          <div className='Field'>
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address' 
            />
          </div>
          <div className='Field'>
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              type='password'
              value={password.value}
              onChange={(e) => setPassword({...password, value: e.target.value})}
              onBlur={() => setPassword({...password, isTouched: true})}
              placeholder='Password' 
            />
          </div>
          <div className='Field'>
          <label>
            Role <sup>*</sup>
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
          </div>
          <button type='submit' disabled={!getIsFormValid()}>
            Create Account
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
