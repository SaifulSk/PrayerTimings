import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import parse from 'html-react-parser'
import data from '../../../config/data/data.json'
import moment from 'moment';

interface StartEndTimeModalProps {
    onSuccess?: (success: any) => void;
    onClose: (success: any) => void;
    shouldShow: boolean;
    formValues: any;
    type: any;
}


export default function StartEndTimeModal({ onSuccess, onClose, shouldShow, formValues, type }: StartEndTimeModalProps) {

    const [message, setMessage] = useState<string>("")

    useEffect(()=>{
        if(formValues) {
            const day = moment(formValues.date).format("D")
            const month = moment(formValues.date).format("MMMM")
            const waqt = formValues.waqt.value
            let x:any = data
            let msg = "<p>"
            if(waqt!="All" && type=="Daywise") {
                msg = msg + "Start: <span>" + moment(x[month][day][waqt]["Start"], "HH:mm").format("h:mm a") + "</span><br/>End: <span>" + (x[month][day][waqt]["End"] ? moment(x[month][day][waqt]["End"], "HH:mm").format("h:mm a") : "Until Next Waqt") + "</span>"
            }
            msg = msg + "</p>"
            setMessage(msg)
        }
    },[formValues])

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
                    {moment(formValues.date).format("D MMMM ")+formValues?.waqt?.value+" Timings"}
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                        {parse(message)}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-wrap mb-3">
                        <button type="button"
                            className="rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3"
                            onClick={onClose}>
                            Close
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

}