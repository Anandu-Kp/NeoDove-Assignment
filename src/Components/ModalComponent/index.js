import * as React from 'react';
import "./styles.css"
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalComponent({ handleClose, open, campaigns }) {

    const [currentCampaign, setCurrentCampaign] = React.useState("");
    const [filteredCampaigns, setFilteredCampaigns] = React.useState("");

    React.useEffect(() => {
        setFilteredCampaigns(campaigns)
    }, [])


    const changeCurrentMenu = (e) => {
        // console.log("debug", currentCampaign);
        if (currentCampaign) {
            document.getElementById(currentCampaign).style.backgroundColor = "white"
            document.getElementById(currentCampaign).style.color = "var(--grey)"
        }
        document.getElementById(e.target.id || e.target.parentElement.id).style.backgroundColor = "var(--purple)"
        document.getElementById(e.target.id || e.target.parentElement.id).style.color = "white"
        setCurrentCampaign(e.target.id || e.target.parentElement.id)
        // console.log(e.target.id || e.target.parentElement.id);
    }

    const pinCampaign = () => {
        // console.log(currentCampaign);
        currentCampaign ? campaigns.push(campaigns[currentCampaign]) : alert("please select a campiagn to confirm")
        handleClose();
    }

    const searchFn = (e) => {
        setFilteredCampaigns(campaigns.filter((campaign) => campaign.title.toLowerCase().includes(e.target.value.toLowerCase())))
        // console.log(filteredCampaigns);
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Pin Cambaigns
                    </Typography>
                    <div className='cambign-list'>
                        <input className='search-campaign' placeholder='Search Campaigns..' onChange={searchFn} type='text'></input>
                        <div className='campaign-list-conatiner'>
                            {
                                filteredCampaigns && filteredCampaigns.map((campaign, idx) => !campaign.isPinned && <div key={idx} onClick={changeCurrentMenu} id={idx} className='campaign-list-item'><span>{campaign.title}</span></div>)
                            }
                        </div>
                        <div className='campaign-list-bottom'>
                            <button onClick={handleClose}>Cancel</button>
                            <button onClick={pinCampaign}>Confirm</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}