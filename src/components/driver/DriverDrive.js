import React, { useState,useEffect,useContext } from 'react'
import '../../styles/driver/DriverDrive.css'
import Get from '../../controllers/Get.js'
import DriveDetailsContext from '../../contexts/DriveDetailsContext.js'
export default function DriverDrive({ drive, setTrip }) {
  const [tripAccept, setTripAccept] = useState(false)
  const DriveDetails = useContext(DriveDetailsContext)

  useEffect(() => {

    console.log(DriveDetails.currentDriveDetails)
    if (DriveDetails.currentDriveDetails) {
      // setTrip(DriveDetails.currentDriveDetails);
      setTripAccept(true)
    }
  }, [])

  const handleAccept = async () => {
    // Handle accept functionality
    // console.log('Request accepted');
    try {
      const response = await Get(`http://localhost:8080/driver/drive/accept/${drive._id}/8755021206`)
      if (response.ok) {
        //   setTrip(null);
        console.log('Trip accepted');
        setTripAccept(true)
         DriveDetails.setCurrentDriveDetails(drive)

      } else {
        console.log('can not accept the request ')
        //   setError('Error accepting trip');
      }
    } catch (error) {
      // setError('Error accepting trip');
      console.log(error);
    }
  };

  const handleReject = () => {
    // Handle reject functionality
    console.log('Request rejected');
    setTrip(null)
  };

  return (

    <>
      <div className="drive-container">
        <div className="drive-box">
          <h2>Drive Details</h2>
          <div className="drive-detail">
            <label>User Name:</label>
            <span>{drive.name}</span>
          </div>
          <div className="drive-detail">
            <label>User Phone:</label>
            <span>{drive.number}</span>
          </div>
          <div className="drive-detail">
            <label>Pickup Address:</label>
            <span>{drive.pickupAdd}</span>
          </div>
          <div className="drive-detail">
            <label>Destination Address:</label>
            <span>{drive.destinationName}</span>
          </div>
          <div className="drive-detail">
            <label>Date:</label>
            <span>{drive.date}</span>
          </div>
          <div className="drive-detail">
            <label>Time:</label>
            <span>{drive.time}</span>
          </div>
          <div className="drive-detail">
            <label>Price:</label>
            <span>{drive.price}</span>
          </div>
          <div className="drive-detail">
            <label>Distance:</label>
            <span>{drive.distance}</span>
          </div>
          <div className="button-group">
            {tripAccept ? <button className="accept-btn" >Complete</button> : ''}
            {!tripAccept ? <button className="accept-btn" onClick={handleAccept}>Accept</button> : ''}
            {!tripAccept ? <button className="reject-btn" onClick={handleReject}>Reject</button> : ''}
          </div>
        </div>
      </div>

    </>
  )
}
