import React, { useContext, useEffect, useState } from 'react'
import LightsCycleContext from '../../context/traffic-control/context';
import { ILightOrchistrator } from '../../models/Orchistrator';
import { TrafficLightStyle } from './style';

interface Props {
    lightId: number;
    current_index: number;
    state_machine:ILightOrchistrator[]
}

const TrafficLight: React.FC<Props> = ({ lightId, state_machine, current_index }) => {

    return (
        <TrafficLightStyle>
            <h1>Light {lightId}</h1>
            <div className="lights-box">
                <div className={`${state_machine[current_index][lightId].r && 'red'} light`}></div>
                <div className={`${state_machine[current_index][lightId].y && 'yellow'} light`}></div>
                <div className={`${state_machine[current_index][lightId].g && 'green'} light`}></div>
            </div>
        </TrafficLightStyle>
    );
}

export default TrafficLight;