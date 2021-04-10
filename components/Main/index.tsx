import React, { useEffect, useContext, useState } from "react";
import LightsCycleContext from "../../context/traffic-control/context";
import TrafficLight from "../TrafficLight";

import { MainStyle } from './style'

const Main: React.FC = () => {
    const { fetchState, state_machine } = useContext(LightsCycleContext)

    useEffect(() => {
        console.log('fetching state');
        fetchState()
    }, [])

    return (<>
        {state_machine.length && <MainStyle>
            <div className="main_wrapper">
                <TrafficLight lightId={1}>
                </TrafficLight>
            </div>
        </MainStyle>}
    </>)
        ;
}

export default Main;