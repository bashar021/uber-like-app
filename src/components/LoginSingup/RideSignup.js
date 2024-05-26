import React, { useState } from 'react'
import Post from '../../controllers/Post'
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginSignup/RideSignup.css'


export default function RideSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password,setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  // /ride/singup

  async function singup(){
    const data = {name:name,email:email,number:number,password:password}
    try{
      const result =await Post('http://localhost:8080/ride/signup',data)
      if(result.status === 200){
        navigate('/user/dashboard')
      }
      console.log(result)
      // clearForm()
    }catch(error){
      console.log(error)
    }
    

  }
  function clearForm(){
    setName('');
    setEmail('');
    setNumber('');
    setPassword('')
    setErrorMessage('');

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    if (!email || !number || !password || !name) {
      setErrorMessage('Please fill in all fields');
    } else {
      // Submit form data
      singup()
    
    }

  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p style={{textAlign:'center'}}>To Book A Ride</p>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
       
        <button type="submit">Sign Up</button>
      </form>
      <div className="google-signup">
        {/* <p>Or sign up with</p> */}
        <button className="google-btn">Google</button>
      </div>
    </div>
  )
}
