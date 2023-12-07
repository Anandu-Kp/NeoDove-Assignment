import "./styles.css"

import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CampignItem from "../CampignItem";
import ModalComponent from "../ModalComponent";


function PinnedCampaigns() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const campigns = [
        {
            title: "first cambign",
            isPinned: true
        },
        {
            title: "second cambign",
            isPinned: true
        },
        {
            title: "third cambign",
            isPinned: false
        },
        {
            title: "fourth cambign",
            isPinned: true
        },
        {
            title: "fifth cambign",
            isPinned: false
        },
    ]

    return (
        <div className="pinned-campaigns">
            <div className="top">
                <div >
                    <span>Pinned Campaigns</span>
                    <InfoIcon />
                </div>
                <div>
                    <span className="campign-reports">campign Reports</span>
                    <div onClick={handleOpen}><AddCircleIcon /></div>
                </div>
            </div>
            <div className="campaign-container">
                {
                    campigns.map((campaign, idx) => campaign.isPinned && <CampignItem campign={campaign} key={idx} />)
                }
            </div>
            <ModalComponent handleClose={handleClose} open={open} campaigns={campigns} />
        </div>
    )
}

export default PinnedCampaigns