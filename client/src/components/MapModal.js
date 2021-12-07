import React from "react";
import "../css/mapmodal.css";

const MapModal = ({setOpenModal}) => {

    return (
        <>
        <div className="modalBackground">
            <div className="modalContainer">

                <div className="title">
                    <h1>Take Santa for a Sleigh Ride!</h1>
                </div>

                <div className="body">
                    <p>Select a bauble </p>
                    <p>Move the sligh to each map pin </p>
                    <p>See what you can find out about Christmas in that country! </p>
                </div>

                <div className="footer">
                    <button onClick={() => {setOpenModal(false);}} id="cancelBtn">Cancel</button>
                    <button>Continue</button>
                </div>

            </div>
        </div>
      </>
    )
}

export default MapModal;