import "./styles.css"

import React from 'react'

import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BasicMenu from "../Menu";

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="nav">
            <div className="left-nav">
                <span>Test Lead</span>
            </div>
            <div className="right-nav">
                <select className="nav-select">
                    <option>This Month</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Today</option>
                </select>
                <div className="nav-item"><HeadsetMicRoundedIcon /></div>
                <div className="nav-item"><RocketLaunchRoundedIcon /></div>
                <div className="nav-item"><NotificationsNoneRoundedIcon /></div>
                <div className="profile-menu-item" onClick={handleClick}><MenuRoundedIcon /></div>
                <BasicMenu handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} />
            </div>
        </div>
    )
}

export default Navbar