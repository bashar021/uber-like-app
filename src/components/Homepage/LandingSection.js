import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../../styles/homepage/LandingSection.css'
const  travelImage = 'https://img.freepik.com/free-photo/selective-focus-miniature-tourist-compass-map-with-plastic-toy-airplane-abstract-background-travel-concept_1423-180.jpg'; 
export default function LandingSection() {
  const navigate = useNavigate()
  
  return (
    <div className="travel-section">
      <div className="travel-left">
        <h1>We are everywhere for you</h1>
        <button onClick={()=>{navigate('/ride login')}} className="book-button">Book a Ride</button>
      </div>
      <div className="travel-right">
        <img src={travelImage} alt="Travel" />
      </div>
    </div>

  )
}
