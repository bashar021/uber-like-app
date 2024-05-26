import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../../styles/homepage/LandingSection.css'
const  travelImage = 'https://img.freepik.com/free-photo/selective-focus-miniature-tourist-compass-map-with-plastic-toy-airplane-abstract-background-travel-concept_1423-180.jpg'; 
export default function LandingSection() {
  const navigate = useNavigate()
  
  return (
    <div className="travel-section">
      {/* <div className="travel-left">
        <h1>We are everywhere for you</h1>
        <button onClick={()=>{navigate('/ride login')}} className="book-button">Book a Ride</button>
      </div> */}
      <div className="book-ride-container">
            <div className="content">
                <h1 className="headline">Your Ride, Your Way</h1>
                <p className="tagline">Book a ride with ease and comfort. Fast, Reliable, and Safe.</p>
                <p className="description">
                    Experience the best ride booking service in town. Whether you need a quick ride across the city or a
                    comfortable journey to your destination, we've got you covered. Our professional drivers and well-maintained
                    vehicles ensure a safe and pleasant trip every time.
                </p>
                <button  onClick={()=>{navigate('/ride login')}} className="book-ride-btn">Book a Ride</button>
            </div>
        </div>


      <div className="travel-right">
        <img src={travelImage} alt="Travel" />
      </div>
    </div>

  )
}
