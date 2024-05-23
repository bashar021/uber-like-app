import React,{useState} from 'react'
import UserNav from './UserNav'
import RideBookForm from './RideBookForm'
import UserRideDetail from './UserRideDetail'
export default function UserDashboard() {
  const [rideConfirm,setRideConfirm] = useState(null);
  return (
    <>
      <UserNav></UserNav>
      {!rideConfirm?<RideBookForm setRideConfirm={setRideConfirm}></RideBookForm>:<UserRideDetail rideDetails={rideConfirm}></UserRideDetail>
      }
      
      {/*  */}

    </>
    
  )
}
