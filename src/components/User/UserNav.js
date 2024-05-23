import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/user/UserNav.css'

export default function UserNav() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <nav className="user-navbar">
        <div className="website-name">WebsiteName</div>
        <div className="user-options">
          <div onClick={()=>{navigate('/user/trips/history')}} className="user-trip-option">My Trip</div>
          <div className="avatar-container" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div className="avatar-icon">&#128100;</div>
            <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
              <div className="dropdown-option">Settings</div>
              <div onClick={()=>{navigate('/user/dashboard')}} className="dropdown-option">Ride</div>
              <div className="dropdown-option">Details</div>
            </div>
            <div className="arrow-icon">&#9660;</div>
          </div>
        </div>
      </nav>
    );
}
