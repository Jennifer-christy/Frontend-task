import React from 'react';
import "./EmpCards.css";
import { FiArrowUpRight } from "react-icons/fi";
import { BsExclamationOctagonFill} from "react-icons/bs";
import star from "../img/star.png"


const EmpCards = (props) => {
  const { image, name, percent ,onClick} = props;

  const getCardColor = () => {
    if (percent >= 75) {
      return "#3CB371"; // Green
    } else if (percent >= 50) {
      return "#FFA500"; // Orange
    } else {
      return "#FF6347"; // Red
    }
  };

  const backgroundImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const progressBarStyle = {
    width: `${percent}%`,
    backgroundColor: getCardColor(),
  };

  const showBadge = percent >= 80;

  return (
    <div className='empcards'  onClick={onClick}  style={backgroundImage} >
       {showBadge && <img  className='badge' src={star} alt=""/>}
      
       <div className='card-items'>
          <h3>{name}</h3>
          <div className='item-1'><p>Senior Designer<span>Exp.</span><span>1Y</span></p></div>

          <div className='item-2'>
            <p >{percent}%</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={progressBarStyle}></div>
            </div>
          </div>

          <div className='item-3'>Best Employee of the Year a.</div>

          <div className='item-4'>
            <button>Assess Employee <FiArrowUpRight style={{fontSize:"20px"}}/></button>
            <span><BsExclamationOctagonFill /></span>
          </div>
       </div>

    </div>
    
  );
}
export default EmpCards;
