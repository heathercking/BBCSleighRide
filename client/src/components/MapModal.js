import React from "react";
import "../css/mapmodal.css";
import cracker_exit from '../assets/images/christmas_cracker_exit.svg';

const MapModal = ({setOpenModal}) => {

    return (
        <>
        <div className="map-modal">
            <div className="map-modal-content">
                <div className="map-modal-header">

                    <h1 className="map-modal-title">Take Santa for a Sleigh Ride!</h1>

                    <div className="map-modal-body">
                        <p>1) Select a bauble </p>
                        <p>2) Land Santa's Sleigh by each candy cane</p>
                        <p>3) See what you can find out about Christmas in that country! </p>
                    </div>

                    <div className="map-modal-footer">
                        <img src={cracker_exit} alt="Exit" className="map-exit-button" onClick={() => {setOpenModal(false);}}/>
                    </div>

                </div>
            </div>
        </div>
      </>
    )
}

export default MapModal;