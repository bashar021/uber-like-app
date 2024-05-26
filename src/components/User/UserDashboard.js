import React,{useState,useContext, useEffect} from 'react'
import UserNav from './UserNav'
import RideBookForm from './RideBookForm'
import UserRideDetail from './UserRideDetail'
import Map from './Map'
import '../../styles/user/UserDashboard.css'
import RideDetailsContext from '../../contexts/RideDetailsContext'
export default function UserDashboard() {
  const [rideConfirm,setRideConfirm] = useState(null);
  const rideDetailsContext =  useContext(RideDetailsContext)
  useEffect(()=>{
    console.log(rideDetailsContext.currentRideDetails)
    if(rideDetailsContext.currentRideDetails){
      setRideConfirm(rideDetailsContext.currentRideDetails)
    }
  },[])
  return (
    <>
       <UserNav></UserNav>
    <div id='dash-board-cont'>
    
      {!rideConfirm?<RideBookForm setRideConfirm={setRideConfirm}></RideBookForm>:<UserRideDetail rideDetails={rideConfirm}></UserRideDetail>
      }
      
        <Map ></Map>

    </div>
      

      
      {/*  */}

    </>
    
  )
}
