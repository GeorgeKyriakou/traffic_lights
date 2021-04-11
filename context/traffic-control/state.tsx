import { useReducer } from "react";

import lightsReducer from "./reducer";
import * as lightActions from "./actions";
import { LightsCycleInterface } from "./model";
import LightsCycleContext from "./context";

const LightsState = (props: any) => {
  const initialState: LightsCycleInterface = {
    state_machine: [],
    current_index: 0,
    delay: 0,
    loop: false,
    fetchState: () => { },
    nextLightsState: () => { },
  };

  const [state, dispatch] = useReducer(lightsReducer, initialState);

  const fetchState = async () => {
    const response = await fetch('http://localhost:3000/state_machine.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const res = await response.json()
    dispatch({
      type: lightActions.SET_STATE,
      payload: res.cycles
    })
  }


  const nextLightsState = (): void =>{
    if(state.current_index === state.state_machine.length-1){
      dispatch({
        type: lightActions.RESET_INDEX
      });
    } else {
      dispatch({
        type: lightActions.NEXT_STATE
      });
    }
  }


  return (
    <LightsCycleContext.Provider
      value={{
        state_machine: state.state_machine,
        delay: state.delay,
        current_index: state.current_index,
        loop: state.loop,
        fetchState,
        nextLightsState,
      }}
    >
      {props.children}
    </LightsCycleContext.Provider>
  );
};

export default LightsState;