import React,{useState,useEffect} from 'react'
import Navbar from './UserNav.js'
import Get from '../../controllers/Get.js'
import '../../styles/user/UserHistory.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar, FaUser, FaPhone, FaCarSide } from 'react-icons/fa';
export default function UserHistory() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [trips,setTrips] = useState([])

  const handleTileClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
    async  function getHistory(){
        const result = await Get(`http://localhost:8080/user/ride/history/${8755021206}`)
       
        if(result.ok){
            const newData = await result.json()
            console.log(newData.data.tripsHistory)
            setTrips(newData.data.tripsHistory)
        }

    }
    useEffect(()=>{
        getHistory()
    },[])
  return (
    <> <Navbar></Navbar>
    {/* <div className="user-history-container">
      {[...trips].reverse().map((trip, index) => (
        <div key={index} className="tile" onClick={() => handleTileClick(index)}>
          <div className="tile-summary">
            <div>{trip.destinationName}</div>
            <div>{trip.pickupAdd}</div>
          </div>
          {expandedIndex === index && (
            <div className="tile-details">
              <div><strong>Driver Name:</strong> {trip.driverName}</div>
              <div><strong>Driver Number:</strong> {trip.driverNumber}</div>
              <div><strong>Vehicle No:</strong> {trip.vehicleNo}</div>
              <div><strong>Date:</strong> {trip.date}</div>
              <div><strong>Time:</strong> {trip.time}</div>
              <div><strong>Destination Address:</strong> {trip.destinationName}</div>
              <div><strong>Pickup Address:</strong> {trip.pickupAdd}</div>
            </div>
          )}
        </div>
      ))}
    </div> */}
    {/* <div className="user-history-container">
            {[...trips].reverse().map((trip, index) => (
                <div key={index} className="tile" onClick={() => handleTileClick(index)}>
                    <div className="tile-summary">
                        <div className="destination">{trip.destinationName}</div>
                        <div className="pickup">{trip.pickupAdd}</div>
                    </div>
                    {expandedIndex === index && (
                        <div className="tile-details">
                            <div><strong>Driver Name:</strong> {trip.driverName}</div>
                            <div><strong>Driver Number:</strong> {trip.driverNumber}</div>
                            <div><strong>Vehicle No:</strong> {trip.vehicleNo}</div>
                            <div><strong>Date:</strong> {trip.date}</div>
                            <div><strong>Time:</strong> {trip.time}</div>
                            <div><strong>Destination Address:</strong> {trip.destinationName}</div>
                            <div><strong>Pickup Address:</strong> {trip.pickupAdd}</div>
                        </div>
                    )}
                </div>
            ))}
        </div> */}
        <div className="user-history-container">
            {[...trips].reverse().map((trip, index) => (
                <div key={index} className={`tile ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleTileClick(index)}>
                    <div className="tile-summary">
                        <FaMapMarkerAlt className="icon" />
                        <div className="summary-details">
                            <div className="destination">{trip.destinationName}</div>
                            <div className="pickup">{trip.pickupAdd}</div>
                        </div>
                    </div>
                    {expandedIndex === index && (
                        <div className="tile-details">
                            <div><FaUser className="detail-icon" /><strong>Driver Name:</strong> {trip.driverName}</div>
                            <div><FaPhone className="detail-icon" /><strong>Driver Number:</strong> {trip.driverNumber}</div>
                            <div><FaCarSide className="detail-icon" /><strong>Vehicle No:</strong> {trip.vehicleNo}</div>
                            <div><FaCalendarAlt className="detail-icon" /><strong>Date:</strong> {trip.date}</div>
                            <div><FaClock className="detail-icon" /><strong>Time:</strong> {trip.time}</div>
                            <div><FaMapMarkerAlt className="detail-icon" /><strong>Destination Address:</strong> {trip.destinationName}</div>
                            <div><FaMapMarkerAlt className="detail-icon" /><strong>Pickup Address:</strong> {trip.pickupAdd}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </>
    
  )
}
