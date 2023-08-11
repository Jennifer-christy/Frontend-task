import SliderPercent from "../SliderPercent/SliderPercent";
import "./Popup.css"
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Popup = ({card,onClose }) => {
  const {image,name}=card;
  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
 
  return (
    <div className="popup">
        <div className="avatar" style={background}/>
        <p>Add a quick feedback for <strong>{name}</strong></p>
        <input type="textarea" placeholder="Write here" ></input>
        <div className="popup-percent">
          <SliderPercent />
        </div>
        <button className ="popup-btn" onClick={onClose}>
          Submit  
          <FiArrowUpRight style={{fontSize:"20px"}}/>
        </button>
     </div>
  );
};
export default Popup

