import React, { useState, useEffect} from 'react'
import DriverNavbar from './DriverNavbar'
import DriverDrive from './DriverDrive'
import Get from '../../controllers/Get.js'
import '../../styles/driver/DriverDashboard.css'

export default function DriverDashboard() {
  const lat = '30.3255646';
  const lon = '78.0436813';
  const [driveSearch, setDriveSearch] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState('');

  async function getDrive() {
    try {
      const response = await Get(`http://localhost:8080/driver/drive/req/${lat}/${lon}`);
      if (response.ok) {
        const tripData = await response.json();
        if (tripData) {
          setTrip(tripData);
          setDriveSearch(false);
          clearInterval(intervalId);
          console.log(tripData)
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
      {/* <DriverDrive></DriverDrive> */}
     
      {!trip && (
        //  <div>
        //  <button onClick={() => { handleRideSearch() }}>Find</button>
        //  <button onClick={handleCancel}>Cancel</button>
        //  {driveSearch?<p>Searching...</p>:''}
        // </div>
        <div className="book-ride-container">
        <h2 className="book-ride-heading">Find a Drive</h2>
        <div className="button-container">
          <button className="book-ride-button" onClick={handleRideSearch}>Find</button>
          <button className="book-ride-button" onClick={handleCancel}>Cancel</button>
          {driveSearch && <p>Searching...</p>}
        </div>
      </div>
          
        )}

      {trip && (
          <DriverDrive setTrip={setTrip} drive={trip}/>
        )}

    </>

    // <div>Driver</div>
  )
}
