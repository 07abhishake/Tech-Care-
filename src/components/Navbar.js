import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="dashboard-container">
      
      <nav className="navbar">
       {/* <img src={testLogo} alt="Test Logo" />  */}
    
      <div className="navbar-logo">
      </div>

      <div className="navbar-links">
     
       <a href="#overview" className="nav-link">Overview</a>
        <a href="#patients" className="nav-link active">Patients</a>
        <a href="#schedule" className="nav-link">Schedule</a>
        <a href="#message" className="nav-link">Message</a>
        <a href="#transactions" className="nav-link">Transactions</a>
      </div>
      <div className="navbar-profile">
        <div className="profile-info">
          <span>Dr. Jose Simmons</span>
          <span className="profile-role">General Practitioner</span>
        </div>
        <div className="profile-settings">⚙️</div>
      </div>
    </nav></div>
  )
}

export default Navbar