import React, { useState, useEffect } from 'react'
import Navbar from './DriverNavbar'
import Get from '../../controllers/Get.js'


export default function DriverHistory() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [trips, setTrips] = useState([])
    const handleTileClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    async function getHistory() {
        const result = await Get(`http://localhost:8080/driver/drive/history/${8755021206}`)

        if (result.ok) {
            const newData = await result.json()
            console.log(newData.data.tripsHistory)
            setTrips(newData.data.tripsHistory)
        }

    }
    useEffect(() => {
        getHistory()
    }, [])
    
    return (
        <>
            <Navbar></Navbar>
            <div className="user-history-container">
                {[...trips].reverse().map((trip, index) => (
                    <div key={index} className="tile" onClick={() => handleTileClick(index)}>
                        <div className="tile-summary">
                            <div>{trip.destinationName}</div>
                            <div>{trip.pickupAdd}</div>
                        </div>
                        {expandedIndex === index && (
                            <div className="tile-details">
                                <div><strong>Date:</strong> {trip.date}</div>
                                <div><strong>Time:</strong> {trip.time}</div>
                                <div><strong>Destination Address:</strong> {trip.destinationName}</div>
                                <div><strong>Pickup Address:</strong> {trip.pickupAdd}</div>
                                {/* <div><strong>Status:</strong> {trip.status}</div> */}

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
