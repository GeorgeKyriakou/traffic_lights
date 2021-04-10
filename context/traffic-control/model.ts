import { ILightOrchistrator } from "../../models/Orchistrator";

export interface LightsCycleInterface {
    state_machine: ILightOrchistrator[];
    current_index: number;
    delay?: number;
    loop: Boolean;
    fetchState: Function;
    nextLightsState: Function;
}