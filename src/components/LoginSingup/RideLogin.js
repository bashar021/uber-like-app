import React,{useState} from 'react'
// import '../../styles/LoginSignup/RideLogin.css'
import {useNavigate} from 'react-router-dom'
import Post from '../../controllers/Post'
import '../../styles/LoginSignup/RideSignup.css'
export default function RideLogin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    async function login(){
      const data = await Post('http://localhost:8080/ride/login',{number:phoneNumber,password:password},'')
      if(data.ok){
        console.log(data)
        navigate('/user/dashboard')
      }
      console.log(data)
      // Functionality to handle submit goes here
      console.log('Phone Number:', phoneNumber);

    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Your form submission logic here
      if ( !phoneNumber || !password) {
          setErrorMessage('Please fill in all fields');
      } else {
          // Submit form data
          login();

      }

  };

  
    return (
      <>
      <div className="signup-container">
            <h2>Login</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
              
                <button type="submit">Login</button>
            </form>
            <div className="google-signup">
                {/* <p>Or sign up with</p> */}
                <button className="google-btn">Google</button>
            </div>
        </div>
      </>
      
    );
}
