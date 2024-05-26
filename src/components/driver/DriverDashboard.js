import React, { useState, useEffect, useContext } from 'react'
import DriverNavbar from './DriverNavbar'
import DriverDrive from './DriverDrive'
import Get from '../../controllers/Get.js'
import '../../styles/driver/DriverDashboard.css'
import Map from '../User/Map.js'
import DriveDetailsContext from '../../contexts/DriveDetailsContext.js'
import { FaCar, FaSearch, FaTimes } from 'react-icons/fa';
export default function DriverDashboard() {
  const lat = '30.3255646';
  const lon = '78.0436813';
  const [driveSearch, setDriveSearch] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState('');
  const DriveDetails = useContext(DriveDetailsContext)

  useEffect(() => {

    console.log(DriveDetails.currentDriveDetails)
    if (DriveDetails.currentDriveDetails) {
      setTrip(DriveDetails.currentDriveDetails);
    }
  }, [])

  async function getDrive() {
    try {
      const response = await Get(`http://localhost:8080/driver/drive/req/${lat}/${lon}`);
      if (response.ok) {
        const tripData = await response.json();
        if (tripData) {
          setTrip(tripData);
          // DriveDetails.setCurrentDriveDetails(tripData)
          setDriveSearch(false);
          clearInterval(intervalId);
          // console.log(tripData)
        } else {
          setError('No trips found nearby');
          console.log('No trip found');
        }
      } else {
        setError('No trips found nearby');
        console.log('No trip found');
      }
    } catch (error) {
      setError('Error fetching trips');
      console.log(error);
    }
  }

  async function handleRideSearch() {
    setDriveSearch(true);
  }

  useEffect(() => {
    if (driveSearch) {
      const id = setInterval(() => {
        getDrive();
      }, 3000);
      setIntervalId(id);
      // Initial fetch to start searching immediately
      getDrive();
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [driveSearch]);

  function handleCancel() {
    setDriveSearch(false);
    clearInterval(intervalId);
  }


  return (
    <>
      <DriverNavbar></DriverNavbar>
      <div id='drive-dashboard-cont'>
        {!trip && (

          
          <div className="book-ride-container">
            <h2 className="book-ride-heading">Find a Drive</h2>
            <p className="book-ride-description">
              Use the options below to find or cancel a drive. Stay safe on the road!
            </p>
            <div className="button-container">
              <button className="book-ride-button find" onClick={handleRideSearch}>
                <FaSearch className="icon" />
                Find
              </button>
              <button className="book-ride-button cancel" onClick={handleCancel}>
                <FaTimes className="icon" />
                Cancel
              </button>
            </div>
            {driveSearch && <p className="searching-text">Searching for a drive...</p>}
          </div>


        )}

        {trip && (
          <DriverDrive setTrip={setTrip} drive={trip} />
        )}
        <Map  ></Map>
      </div>

    </>

    // <div>Driver</div>
  )
}
