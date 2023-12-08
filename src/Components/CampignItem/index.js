import "./styles.css"

import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function CampignItem({ campign }) {

    return (
        <div className="campign-item">
            <div className="item-left">
                <div className="circle"></div>
                <span>{campign.title}</span>
            </div>
            <CloseIcon />

        </div>
    )
}

export default CampignItem