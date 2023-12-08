import Navbar from "../Navbar"
import PinnedCampaigns from "../PinnedCampaigns"
import "./styles.css"
import React from 'react'

import CampaignIcon from '@mui/icons-material/Campaign';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadAnalysis from "../LoadAnalysis";
import CallAnalysis from "../CallAnalysis";
import CallIcon from '@mui/icons-material/Call';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChartBox from "../ChartBox";

function MainComponent() {
    return (
        <div className="main-container">
            <header className="main-header">
                <Navbar />
            </header>
            <main className="main">
                <div className="main-top">
                    <div className="main-top-left">
                        <PinnedCampaigns />
                        <div className="add-buttons">
                            <div className="add-button">
                                <div className="left">
                                    <div className="icon first"> <CloudUploadIcon /></div>
                                    <span>Upload Leads</span>
                                </div>
                                <div className="right">
                                    <KeyboardArrowRightIcon />
                                </div>
                            </div>
                            <div className="add-button">
                                <div className="left">
                                    <div className="icon second"> <CampaignIcon /></div>
                                    <span>Create Capmaign</span>
                                </div>
                                <div className="right">
                                    <KeyboardArrowRightIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-top-right">
                        <ChartBox />
                    </div>
                </div>
                <div className="main-bottom">
                    <div> <LoadAnalysis /></div>
                    <div> <CallAnalysis /></div>
                    <div>
                        < div className="add-button">
                            <div className="left">
                                <div className="icon " style={{ backgroundColor: "rgba(75, 197, 81, 0.5)" }}> <CallIcon /></div>
                                <span>Call Report</span>
                            </div>
                            <div className="right">
                                <KeyboardArrowRightIcon />
                            </div>
                        </div>
                        < div className="add-button">
                            <div className="left">
                                <div className="icon " style={{ backgroundColor: "rgba(197, 75, 115, 0.5)" }}> <PersonOutlineIcon /></div>
                                <span>User Login Report</span>
                            </div>
                            <div className="right">
                                <KeyboardArrowRightIcon />
                            </div>
                        </div>
                        < div className="add-button">
                            <div className="left">
                                <div className="icon " style={{ backgroundColor: "rgba(103, 209, 3, 0.5)" }}> <ManageAccountsIcon /></div>
                                <span>Manage Users</span>
                            </div>
                            <div className="right">
                                <KeyboardArrowRightIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainComponent