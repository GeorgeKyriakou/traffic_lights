import React, { useContext, useEffect, useState } from 'react'
import LightsCycleContext from '../../context/traffic-control/context';
import { TrafficLightStyle } from './style';

interface Props {
    lightId: number;
}

const TrafficLight: React.FC<Props> = ({ lightId }) => {
    const { current_index, nextLightsState, state_machine } = useContext(LightsCycleContext)

    useEffect(() => {
        setTimeout(nextLightsState, state_machine[current_index].delay_ms)
    }, [current_index])

    return (
        <TrafficLightStyle>
            <h1>Light {lightId}</h1>
            <div className="lights-box">
                <div className={`${state_machine[current_index].red && 'red'} light`}></div>
                <div className={`${state_machine[current_index].yellow && 'yellow'} light`}></div>
                <div className={`${state_machine[current_index].green && 'green'} light`}></div>
            </div>
        </TrafficLightStyle>
    );
}

export default TrafficLight;