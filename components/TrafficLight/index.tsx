import React, { useContext, useEffect, useState } from 'react'
import LightsCycleContext from '../../context/traffic-control/context';
import { ILightOrchistrator } from '../../models/Orchistrator';
import { TrafficLightStyle } from './style';

interface Props {
    orchistrator: ILightOrchistrator[]
}

const TrafficLight: React.FC<Props> = ({ orchistrator }) => {
    const { current_index, nextLightsState  } = useContext(LightsCycleContext)
    const [currentLights, setCurrentLights] = useState(orchistrator[0])

    const tick = setInterval(()=>{
        nextLightsState()
        setCurrentLights(orchistrator[current_index])
        if (current_index === orchistrator.length - 1) {
            clearInterval(tick);    
        }
    }, 2000)
    


    return (
        <TrafficLightStyle>
            <h1>Light 1</h1>
            {console.log({currentLights})}
            <div className="lights-box">
                <div className={`${currentLights.red && 'red'} light`}></div>
                <div className={`${currentLights.yellow && 'yellow'} light`}></div>
                <div className={`${currentLights.green && 'green'} light`}></div>
            </div>
        </TrafficLightStyle>
    );
}

export default TrafficLight;