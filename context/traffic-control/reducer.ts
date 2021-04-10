import { ILightOrchistrator } from "../../models/Orchistrator";
import * as trafficLightActions from "./actions";
import { LightsCycleInterface } from "./model";



export default (state: LightsCycleInterface, action: any) => {
    switch (action.type) {
        case trafficLightActions.SET_STATE: {   
            return {
                ...state,
                state_machine: action.payload
            };   
        }
        case trafficLightActions.NEXT_STATE: {   
            return {
                ...state,
                current_index: state.current_index + 1
            };
        }
        case trafficLightActions.RESET_INDEX: { 
            return {
                ...state,
                current_index: 0
            };
        }
        default:
            return state;
    }
};
