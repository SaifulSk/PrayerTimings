import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import moment from 'moment'
import Insights from './Insights';

interface InsightsModalProps {
    shouldShow: boolean;
    setShowInsightsModal: Function;
}

export default function InsightsModal({ shouldShow, setShowInsightsModal }: InsightsModalProps) {

    useEffect(()=>{
        let x:any=document.getElementById("azan")
        if(x) {
            x.play()
        }
    },[])

    return (
        <React.Fragment>
            <Modal
                show={shouldShow}
                backdrop="static"
                keyboard={false}
                // className="dark-modal"
                centered
                contentClassName='custom-modal'
            >
                <Modal.Header>
                    Insights of the Day
                    <button type="button" className="" onClick={() => setShowInsightsModal(false)} style={{background:"none",border:"none",color:"#fff"}}>
                        <i className="fa fa-times" />
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                        <Insights />
                        <Insights type="Hadith" />
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )

}