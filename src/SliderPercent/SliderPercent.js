import React, { useState } from 'react';
import Slider from 'react-slider';
import "./SliderPercent.css"

import {HiPlusSm,HiMinusSm}from "react-icons/hi"

const SliderPercent = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const minRange = 0;
  const maxRange = 100;
  const step = 1; // You can adjust the step value as needed.

  const handleSliderChange = ([newMin, newMax]) => {
    setMin(newMin);
    setMax(newMax);
  };

  const handleDecrease = () => {
    if (max - step >= min + step) {
      setMax(max - step);
    }
  };

  const handleIncrease = () => {
    if (max + step <= maxRange) {
      setMax(max + step);
    }
  };

  return (
    <div className="sliderpercent">
      <button onClick={handleDecrease}><HiMinusSm/></button>
      <Slider
      className='slider'
        min={minRange}
        max={maxRange}
        step={step}
        value={[min, max]}
        onChange={handleSliderChange}
        renderThumb={(props, state) => (
          <div {...props} className="thumb">
            <span className='percent' style={{ display: state.valueNow === max ? 'inline' : 'none' }}>
            {state.valueNow === max ? `${state.valueNow}%` : null}</span>
          </div>
        )}
        renderTrack={(props) => <div {...props} className="track"></div>}
      />
      <button onClick={handleIncrease}><HiPlusSm/></button>
    </div>
  );
};
 

export default SliderPercent