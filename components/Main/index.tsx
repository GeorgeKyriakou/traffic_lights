import React, { useEffect, useContext, useState } from "react";
import LightsCycleContext from "../../context/traffic-control/context";
import TrafficLight from "../TrafficLight";

import { MainStyle } from "./style";

const Main: React.FC = () => {
  const {
    fetchState,
    state_machine,
    current_index,
    nextLightsState,
  } = useContext(LightsCycleContext);

  useEffect(() => {
    console.log("fetching state");
    fetchState();
  }, []);

  useEffect(() => {
    const tick = setTimeout(nextLightsState, 1000);
    return () => clearTimeout(tick);
  }, [current_index]);

  return (
    <>
      {state_machine.length && (
        <MainStyle>
          <div className="main_wrapper">
            <TrafficLight
              lightId={1}
              state_machine={state_machine}
              current_index={current_index}
            ></TrafficLight>
            <TrafficLight
              lightId={2}
              state_machine={state_machine}
              current_index={current_index}
            ></TrafficLight>
          </div>
        </MainStyle>
      )}
    </>
  );
};

export default Main;
