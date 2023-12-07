import React, { useEffect, useState } from 'react'
import "./styles.css"
import logo from "../../Assets/Images/logo.png"

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function SidebarComponent() {

    const [currentMenu, setCurrentMenu] = useState("dashboard");
    useEffect(() => {
        document.getElementById("dashboard").style.backgroundColor = "var(--purple)"
        document.getElementById("dashboard").style.color = "white"

    }, [])

    const changeCurrentMenu = (e) => {
        document.getElementById(currentMenu).style.backgroundColor = "white"
        document.getElementById(currentMenu).style.color = "var(--grey)"
        document.getElementById(e.target.id || e.target.parentElement.id).style.backgroundColor = "var(--purple)"
        document.getElementById(e.target.id || e.target.parentElement.id).style.color = "white"
        setCurrentMenu(e.target.id || e.target.parentElement.id)
        // console.log(e.target.id || e.target.parentElement.id);
    }
    return (
        <div className="sidebar-container">
            <div className="sidebar-top">
                <div className="logo-container">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="sidebar-title">
                    <span>Tm-Admin</span>
                </div>
                <div className="sidebar-menu">

                    <div className="menu-item" id='dashboard' onClick={changeCurrentMenu}>
                        <GridViewRoundedIcon />
                        <span>Dashboard</span>
                    </div>


                    <div className="menu-item" id='contacts' onClick={changeCurrentMenu}>
                        <PermContactCalendarRoundedIcon />
                        <span>Contacts</span>
                    </div>


                    <div className="menu-item" id='campigns' onClick={changeCurrentMenu}>
                        <RssFeedRoundedIcon />
                        <span>Campaigns</span>
                    </div>


                    <div className="menu-item" id='integration' onClick={changeCurrentMenu}>
                        <CropFreeRoundedIcon />
                        <span>Integration</span>
                    </div>


                    <div className="menu-item" id='report' onClick={changeCurrentMenu}>
                        <DvrRoundedIcon />
                        <span>Report</span>
                    </div>


                    <div className="menu-item" id='marketplace' onClick={changeCurrentMenu}>
                        <ShoppingCartRoundedIcon />
                        <span>Marketplace</span>
                    </div>


                    <div className="menu-item" id='sms' onClick={changeCurrentMenu}>
                        <MessageRoundedIcon />
                        <span>SMS Automation</span>
                    </div>


                    <div className="menu-item" id='workflow' onClick={changeCurrentMenu}>
                        <StreamRoundedIcon />
                        <span>Workflow</span>
                    </div>

                </div>
            </div>

            <div className="sidebar-bottom">

                <div className="menu-item" id='settings' onClick={changeCurrentMenu}>
                    <SettingsRoundedIcon />
                    <span>Settings</span>
                </div>

            </div>
        </div>
    )
}

export default SidebarComponent