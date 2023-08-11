import React, { useState } from 'react';
import "./Sidemenu.css"
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import{FiPlus,FiMinus,FiClock,FiStar}from "react-icons/fi"
import SliderValue from '../SliderValue/SliderValue';
import SliderPercent from '../SliderPercent/SliderPercent';
import { titles } from '../utils/data';

const Sidemenu = () => {
  const [isJobRoleVisible, setIsJobRoleVisible] = useState(false);
  const[isExperienceVisible,setIsExperienceVisible]=useState(false);
  const[isScoreVisible,setIsScoreVisible]=useState(false);

  const [jobTitles, setJobTitles] = useState(titles);

  const handleTitleClick = (id) => {
    setJobTitles(prevJobTitles =>
      prevJobTitles.map(title =>
        title.id === id ? { ...title, isSelected: !title.isSelected } : title
      )
    );
  };

  const handleToggle = () => {
  setIsJobRoleVisible((prevIsOpen) => !prevIsOpen);
  };
  const handleSliderValue =()=>{
  setIsExperienceVisible((prevIsOpen)=>!prevIsOpen);
  };
  const handleSliderPercent =()=>{
  setIsScoreVisible((prevIsOpen)=>!prevIsOpen);
  };

  return (
   <div className='sidemenu'>
     <div className='item'>
       <div className='title'>
         <p><span><LiaEnvelopeOpenTextSolid/></span>Job Title</p> 
         <button onClick={handleToggle}>{isJobRoleVisible ? <FiMinus/> : <FiPlus/>}</button>
       </div>

       <div className="job-title-list"  >
          {isJobRoleVisible && (
            <ul>
              {jobTitles.map(title => (
                <li
                  key={title.id}
                  className={title.isSelected ? 'selected' : ''}
                  onClick={() => handleTitleClick(title.id)}
                >
                 <div className={`checkbox ${title.isSelected ? 'checked' : ''}`}/>
                  {title.title}
                </li>
              ))}
            </ul  >
          )}
        </div>
      </div>

      <div className="item">
        <div className='title'>
         <p><span><FiClock/></span>Experience</p> 
         <button onClick={handleSliderValue}>{isExperienceVisible ? <FiMinus/> : <FiPlus/>}</button>
        </div>
        <div className='slider'>
          {isExperienceVisible && ( <SliderValue/>)}
        </div>
      </div>

      <div className='item'>
        <div className='title'>
         <p><span><FiStar/></span>Score</p> 
         <button onClick={handleSliderPercent}>{isScoreVisible ? <FiMinus/> : <FiPlus/>}</button>
        </div>
        <div >
        {isScoreVisible && ( <SliderPercent/>)}
        </div>
      </div>
    
     <div  className='btn'>
       <button >Apply Filter</button>
     </div>
    </div>
  )
}
  
export default Sidemenu