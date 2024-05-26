import RideDetailsContext from "./RideDetailsContext";
import React,{ useState } from "react";
const RideDetails = function(props){
    const [currentRideDetails,setCurrentRideDetails] = useState(null)
    return(
        <RideDetailsContext.Provider value={{currentRideDetails,setCurrentRideDetails}}>
              {props.children}
        </RideDetailsContext.Provider>
    )

}
export default RideDetails;