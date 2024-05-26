import DriveDetailsContext from "./DriveDetailsContext";
import React,{ useState } from "react";
const DriveDetails = function(props){
    const [currentDriveDetails,setCurrentDriveDetails] = useState(null)
    return(
        <DriveDetailsContext.Provider value={{currentDriveDetails,setCurrentDriveDetails}}>
              {props.children}
        </DriveDetailsContext.Provider>
    )

}
export default DriveDetails;