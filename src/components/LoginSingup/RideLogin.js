import React,{useState} from 'react'
import '../../styles/LoginSignup/RideLogin.css'
import {useNavigate} from 'react-router-dom'
import Post from '../../controllers/Post'

export default function RideLogin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleSubmit = async () => {
      const data = await Post('http://localhost:8080/ride/login',{number:phoneNumber},'')
      if(data.ok){
        console.log(data)
        navigate('/user/dashboard')
      }
      console.log(data)
     
      // Functionality to handle submit goes here
      console.log('Phone Number:', phoneNumber);
    };
  
    return (
      <div className="ride-login-container">
        <h2 className="title">Write down the phone number</h2>
        <div className="input-container">
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handleChange}
            className="input-field"
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
      </div>
    );
}
