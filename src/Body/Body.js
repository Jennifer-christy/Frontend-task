import { useState } from "react"
import Content from "../Content/Content"
import Navbar from "../Navbar/Navbar"
import Popup from "../Popup/Popup"
import Sidemenu from "../Sidemenu/Sidemenu"
import "./Body.css"
import {FiSearch} from "react-icons/fi"

const Body = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (employee) => {
    setSelectedCard(employee);
    setIsPopupOpen(true);
  };


  const handleClosePopup = () => {
    setSelectedCard(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="body">
      <div className="blur" ></div>
      <Navbar />
      <Sidemenu/>

      <div className='search-bar'>
          <input type="text" placeholder='Search'></input>
          <button><FiSearch/></button>
      </div>

      <div className="blur blur2" style={{top:"70%" ,left:"70%" ,width:"20rem",height:"10rem"}}></div>

      <Content onClick={handleCardClick}/>
       {isPopupOpen && selectedCard && (
        <div className="popup-overlay">
          <Popup card={selectedCard} onClose={handleClosePopup} />
        </div>
      )}
      
    </div>
  )
}

export default Body

