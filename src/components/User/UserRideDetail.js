import React,{useState,useEffect} from 'react'
import '../../styles/user/UserRideDetails.css'
export default function UserRideDetail(props) {
  const [trip,setTrip] =useState('')
    const rideDetails = {
        driverName: 'John Doe',
        phoneNumber: '123-456-7890',
        vehicleNumber: 'ABC123',
        pickupAddress: '123 Main St, City, Country',
        destinationAddress: '456 Elm St, City, Country',
        price: '$20'
      };
      useEffect(()=>{
        console.log(props.rideDetails.tripsHistory[props.rideDetails.tripsHistory.length-1])
        setTrip(props.rideDetails.tripsHistory[props.rideDetails.tripsHistory.length-1])
      },[props])
  return (

<div className="user-ride-detail">
      <div className="header">
        <h2>Driver Details</h2>
      </div>
      <div className="details">
        <p><strong>Driver Name:</strong> {trip.driverName}</p>
        <p><strong>Phone Number:</strong> {trip.driverNumber}</p>
        <p><strong>Vehicle Number:</strong> {trip.vehicleNo}</p>
      </div>
      <div className="header">
        <h2>Trip Details</h2>
      </div>
      <div className="details">
        <p><strong>Pickup Address:</strong> {trip.pickupAdd}</p>
        <p><strong>Destination Address:</strong> {trip.destinationName}</p>
        
      </div>
    </div>
  )
}
