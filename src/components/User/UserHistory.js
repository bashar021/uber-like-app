import React,{useState,useEffect} from 'react'
import Navbar from './UserNav.js'
import Get from '../../controllers/Get.js'
import '../../styles/user/UserHistory.css'
export default function UserHistory() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [trips,setTrips] = useState([])

  const dummyHistory = [
    {
      destinationName: 'Central Park',
      pickupAdd: '123 Main St',
      destinationLat: '40.785091',
      destinationLon: '-73.968285',
      pickupAddLat: '40.730610',
      pickupAddLon: '-73.935242',
      status: 'Completed',
      driverName: 'John Doe',
      driverNumber: '1234567890',
      vehicleNo: 'AB123CD',
      date: '2024-05-22',
      time: '10:00 AM'
    },
    {
      destinationName: 'Empire State Building',
      pickupAdd: '456 Elm St',
      destinationLat: '40.748817',
      destinationLon: '-73.985428',
      pickupAddLat: '40.730610',
      pickupAddLon: '-73.935242',
      status: 'Completed',
      driverName: 'Jane Smith',
      driverNumber: '0987654321',
      vehicleNo: 'EF456GH',
      date: '2024-05-21',
      time: '11:00 AM'
    }
  ];

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
    <div className="user-history-container">
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
    </div>
    </>
    
  )
}
