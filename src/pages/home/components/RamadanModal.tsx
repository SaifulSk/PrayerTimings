import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import moment from 'moment'

interface RamadanModalProps {
    shouldShow: boolean;
}

export default function RamadanModal({ shouldShow }: RamadanModalProps) {

    const [day, setDay] = useState<any>()

    useEffect(()=>{
        let today = moment()
        let firstDay = moment("24-03","DD-MM")
        setDay(today.diff(firstDay,'days') + 1)
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
                    Ramadan Day {day}
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                        <img src="/PrayerTimings/images/ramadan.webp" style={{width:"100%"}} />
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )

}