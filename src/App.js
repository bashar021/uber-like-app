import './App.css';
import Homepage from './components/Homepage';
import { Route, BrowserRouter as Router, Routes, useNavigate, Redirect } from "react-router-dom"
import RideLogin from './components/LoginSingup/RideLogin';
import UserDashboard from './components/User/UserDashboard';
import DriverDashboard from './components/driver/DriverDashboard';
import DriverLogin from './components/LoginSingup/DriverLogin'
import UserHistory from './components/User/UserHistory';
import DriverHistory from './components/driver/DriverHistory'
import RideDetails from './contexts/RideDetails';
import DriveDetails from './contexts/DriveDetails'
import RideSignup from './components/LoginSingup/RideSignup';
import DriverSignup from './components/LoginSingup/DriverSignup';
function App() {
  return (
    <>
      {/* <Homepage></Homepage> */}
      <Router>
        <Routes>
          <Route path="/" element={ <Homepage></Homepage>}></Route>
          <Route path='/ride login' element={<RideLogin></RideLogin>}></Route>
          <Route path='/user/dashboard' element={
           
              <UserDashboard></UserDashboard>
             
          }> 
          </Route>
          <Route path='/driver/dashboard' element={
            
              <DriverDashboard></DriverDashboard>
         
            
          }></Route>
          <Route path='/driver/login' element={<DriverLogin></DriverLogin>} ></Route>
          <Route path='/user/trips/history' element={<UserHistory></UserHistory>}></Route>
          <Route path='/driver/drives/history' element={<DriverHistory></DriverHistory>}></Route>
          <Route path='/ride/signup' element={<RideSignup></RideSignup>}></Route>
          <Route path='/driver/signup' element={<DriverSignup></DriverSignup>}></Route>


        
        </Routes>

      </Router>
    </>


  );
}
export default App;
