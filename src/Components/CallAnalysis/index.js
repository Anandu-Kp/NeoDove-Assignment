import "./styles.css"

import React from 'react'
import InfoIcon from '@mui/icons-material/Info';


function CallAnalysis() {
    return (
        <div className="load-container">
            <div className="load-top">
                <span>Call Analysis</span>
                <InfoIcon />

            </div>
            <div className="call-bottom">
                <div>
                    <span>Attempted :</span>
                    <span>0</span>
                </div>
                <div>
                    <span>Connected :</span>
                    <span>0</span>
                </div>
                <div>
                    <span>Connected v/s Attempted :</span>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}

export default CallAnalysis