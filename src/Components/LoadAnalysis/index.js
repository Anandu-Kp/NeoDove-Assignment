import "./styles.css"
import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import LoadBox from "../LoadBox";


function LoadAnalysis() {
    return (
        <div className="load-container">
            <div className="load-top">
                <span>Load Analysis</span>
                <InfoIcon />

            </div>
            <div className="load-bottom">
                <LoadBox color={"rgba(160, 168, 160, 0.425)"} loadObj={{ count: 136787, title: "Open" }} />
                <LoadBox color={"rgba(240, 240, 171, 0.425)"} loadObj={{ count: 8119, title: "In-Progress" }} />
                <LoadBox color={"rgba(77, 150, 77, 0.425)"} loadObj={{ count: 116, title: "Converted" }} />
                <LoadBox color={"rgba(243, 142, 159, 0.425)"} loadObj={{ count: 666, title: "Lost" }} />
            </div>
        </div>
    )
}

export default LoadAnalysis