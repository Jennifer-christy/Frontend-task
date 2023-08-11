import {useState} from 'react'
import ReactSlider from 'react-slider';
import "./SliderValue.css"
const SliderValue = () => {
    const [min,setMin]=useState(0);
    const [max,setMax]=useState(10);

    return(
        <div className='slidervalue'>
          <button>{min}</button>
          <ReactSlider 
            defaultValue={[min,max]} 
            className='slider'
            trackClassName='tracker'
            min={0}
            max={10}
            minDistance={1}
            step={1}
            withTracks={true}
            pearling={true}
            renderThumb={(props)=>{
             return <div {...props} className='thumb'> </div>
            }}
            renderTrack={(props)=>{
                return <div {...props} className='track'> </div>
               }}
            onChange={([min,max])=>{
              setMin(min);
              setMax(max);
           }}
          />
          <button>{max}</button>
        </div>
    )
    
};

export default SliderValue