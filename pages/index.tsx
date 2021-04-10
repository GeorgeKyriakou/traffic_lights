import React from 'react'
import Main from '../components/Main';
import LightsState from '../context/traffic-control/state';

const index: React.FC = () => {
    return (
        <LightsState>
            <Main />
        </LightsState>
    )

}

export default index