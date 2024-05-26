import React, { useState } from 'react'
import Post from '../../controllers/Post'
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginSignup/RideSignup.css'

export default function DriverSignup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [vehicleType,setVehicleType] = useState('')
    const [vehicleNo,setVehicleNo] = useState('')
    const navigate = useNavigate()
    // /ride/singup

    async function singup() {
        const data = { name: name, email: email, number: number, password: password,vehicle:vehicleType,vehicle:vehicleType,vehicleNo:vehicleNo, }
        try {
            const result = await Post('http://localhost:8080/driver/signup', data)
            console.log(result)
            if(result.status === 200){
                navigate('/driver/dashboard')
            }
            // clearForm()
        } catch (error) {
            console.log(error)
        }


    }
    function clearForm() {
        setName('');
        setEmail('');
        setNumber('');
        setPassword('')
        setErrorMessage('');
        setVehicleNo('')
        setVehicleType('')

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
        if (!email || !number || !password || !name || !vehicleNo || !vehicleType) {
            setErrorMessage('Please fill in all fields');
        } else {
            // Submit form data
            singup()

        }

    };
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <p style={{ textAlign: 'center' }}>To Earn A Money</p>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label>Name:</label> */}
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder='Name'/>
                </div>
                <div className="form-group">
                    {/* <label>Email:</label> */}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email'/>
                </div>
                <div className="form-group">
                    {/* <label>Phone Number:</label> */}
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Number' />
                </div>
                <div className="form-group">
                    {/* <label>Password:</label> */}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                </div>
                <div className="form-group">
                    <label>Vehicle Type:</label>
                    <select value={vehicleType} onChange={(e)=>{setVehicleType(e.target.value)}}  name="vehicleType" id="vehicleType" className="vehicle-select" aria-placeholder='Vehicle Type'>
                        <option value="scooty">Scooty</option>
                        <option value="bike">Bike</option>
                    </select>

                </div>
                
                <div className="form-group">
                    {/* <label>Password:</label> */}
                    <input type="text" value={vehicleNo} onChange={(e) => setVehicleNo(e.target.value)} placeholder='Vehicle No' />
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
