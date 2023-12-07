import "./styles.css"

import React from 'react'

function LoadBox({ color, loadObj }) {
    return (
        <div className="load-box" style={{ backgroundColor: `${color}` }}>
            <span className="count">{loadObj.count}</span>
            <span className="load-title">{loadObj.title}</span>
        </div>
    )
}

export default LoadBox