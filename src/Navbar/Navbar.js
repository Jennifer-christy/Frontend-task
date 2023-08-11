import "./Navbar.css"
import {CiMenuFries} from "react-icons/ci"
const Navbar = () => {
  return (
    <div className="nav">
       <div className="logo">
         <h1>clear<span>hire</span></h1>
       </div>
       <div className="nav-items">
         <ul>
          <li>Your Employees</li>
          <li>On-Board</li>
          <li>Verification Request</li>
         </ul>
         <div className="menu"><CiMenuFries/></div>
       </div>
    </div>
 
  )
}

export default Navbar