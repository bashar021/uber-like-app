import React, { useState,useCallback ,useEffect} from 'react'
import Post from '../../controllers/Post.js'
import Get from '../../controllers/Get.js'
// import axios from 'axios';
import '../../styles/user/RideBookForm.css'


export default function RideBookForm(props) {
  const [pickupLocation, setPickupLocation] = useState({});
  const [pickupLocationValue, setPickupLocationValue] = useState('')
  const [showPickupLocation, setShowPickupLocation] = useState([])
  const [dropoffLocation, setDropoffLocation] = useState({});
  const [dropofLocationValue, setDropofLocationValue] = useState('')
  const [showDropofLocation, setShowDropoffLocation] = useState([])
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [exampleAddresses, setExampleAddresses] = useState([]);
  const [distance, setDistance] = useState('')
  const [loader,setLoader] = useState(false)
  // const exampleAddresses = ['123 Main St', '456 Elm St', '789 Oak St','123 Main St', '456 Elm St', '789 Oak St'];
  
  
  async function checkStatus(number,id){
    const data = await Get(`http://localhost:8080/user/ride/status/${number}/${id}`,'')
    if(data.status === 200){
      const newData = await data.json()
      console.log(newData)
      props.setRideConfirm(newData.data)
      setLoader(false)
      return true
    }
    return false

  }
  const handleSearch = async () => {
    setLoader(true)
    const details = {destinationName:pickupLocationValue,pickupAdd:dropofLocationValue,destinationLat:dropoffLocation.lat,destinationLon:dropoffLocation.lon,pickupAddLat:pickupLocation.lat,pickupAddLon:pickupLocation.lon,
      
      name:'bashar',
      number:'8755021206',
      date:date,
      time:time
    }
    const data = await Post('http://localhost:8080/user/ride/req',details,'')
    if(data.ok){
      const newData = await data.json()
      if(newData.data._id){
        const checkStatusRepeatedly = async () => {
          const status = await checkStatus('8755021206', newData.data._id);
          if (!status) {
            setTimeout(checkStatusRepeatedly, 10000);
          } else {
            // const newData = await status.json()
            // console.log(newData.Data)
            // Handle other status codes
          }
        };
  
        checkStatusRepeatedly();
      }
    }
    console.log(data)
   
  };
  
  async function handlePickupLocation(e) {
  
    setTimeout(async () => {
      const data = await fetchSuggestions(e.target.value);
      setShowPickupLocation([...data]);
      
    }, 1000);
    
  }
  // useEffect(() => {
  //   const timeoutId = setTimeout(async () => {
  //     const data = await fetchSuggestions(setPickupLocationValue);
  //     setShowPickupLocation([...data]);
  
  //     console.log('hii')
  //   }, 500);
  //   return () => clearTimeout(timeoutId);
  // }, [setPickupLocationValue, 500]);



  const handlePickupChange = (item) => {
    setPickupLocation(item);
    setShowPickupLocation([])
    setPickupLocationValue(item.display_name)
    if (pickupLocation.lat && dropoffLocation.lat) {
      const distanceKm = calCulateDistance(
        pickupLocation.lat,
        dropoffLocation.lat,
        pickupLocation.lon,
        dropoffLocation.lon
      );
      setDistance(distanceKm.toFixed(2) + ' km');
      // console.log(distanceKm.toFixed(2) + ' km')
    } else {
      setDistance('0');
    }
  };

  async function handleDropofLocation(e){
    setTimeout(async() => {
      const data = await fetchSuggestions(e.target.value);
      setShowDropoffLocation([...data])
    }, 1000);
   

  }
  const handleDropoffChange = (item) => {
    setDropoffLocation(item);
    setShowDropoffLocation([])
    setDropofLocationValue(item.display_name)
    if (pickupLocation.lat && dropoffLocation.lat) {
      const distanceKm = calCulateDistance(
        pickupLocation.lat,
        dropoffLocation.lat,
        pickupLocation.lon,
        dropoffLocation.lon
      );
      setDistance(distanceKm.toFixed(2) + ' km');
      // console.log(distanceKm.toFixed(2) + ' km')
    } else {
      setDistance('0');
    }

  };

 
  const fetchSuggestions = async (query, setFunc) => {
    try {
      if (query.length > 2) {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        const data = await response.json();
        if (data.length > 0) {
          return data;
        }
      } else {
        return []
       
      }

    } catch (error) {
      console.log(error)
    }
    return []

  };

  function calCulateDistance(lat1, lat2, lon1, lon2) {
    console.log(lat1, lat2, lon1, lon2)

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula 
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956 
    // for miles
    let r = 6371;

    // calculate the result
    console.log(c * r)
    return (c * r);
  }




  return (
    <div className="container">
      <div className="content">
        <div className="input-box">
          <input
            type="text"
            placeholder="Pickup Location"
            className="pickup-input"
            value={pickupLocationValue}
            onChange={(e) => { handlePickupLocation(e); setPickupLocationValue(e.target.value); }}
          />
          <div class='address-drop-down' >
            {showPickupLocation.map((item, index) => {
              return (
                <div key={index} className="dropdown-item" onClick={() => { handlePickupChange(item); }}>
                  {item.display_name}
                </div>
              )
            }
            )}

          </div>




        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Dropoff Location"
            className="dropoff-input"
            value={dropofLocationValue}
            onChange={(e) => { setDropofLocationValue(e.target.value); handleDropofLocation(e); }}
          />
         
            <div class='address-drop-down' >
              {showDropofLocation.map((item, index) => {
                return (
                  <div key={index} className="dropdown-item" onClick={() => { handleDropoffChange(item) }}>
                    {item.display_name}
                  </div>
                )
              }
              )}
            </div>
         


        </div>
        <div className="option">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="option">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            className="time-input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button className="search-btn" onClick={handleSearch}>Search</button>
        {loader?<p>Searching...</p>:''}
      </div>
    </div>
  );

}
