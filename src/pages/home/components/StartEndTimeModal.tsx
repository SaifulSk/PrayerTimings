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
            let msg = ""
            if(type=="Daywise") {
                if(waqt!="All") {
                    msg = msg + "<p>Start: <span>" + moment(x[month][day][waqt]["Start"], "HH:mm").format("h:mm a") + "</span><br/>End: <span>" + (x[month][day][waqt]["End"] ? moment(x[month][day][waqt]["End"], "HH:mm").format("h:mm a") : "Until Next Waqt") + "</span></p>"
                } else {
                    Object.keys(x[month][day]).map((w:any)=>{
                        msg = msg + "<div class='col-6 waqt-card'><h4 class='page-title'>"+w+"</h4><p>Start: <span>" + moment(x[month][day][w]["Start"], "HH:mm").format("h:mm a") + "</span><br/>End: <span>" + (x[month][day][w]["End"] ? moment(x[month][day][w]["End"], "HH:mm").format("h:mm a") : "Until Next Waqt") + "</span></p></div>"
                    })
                }
            } else {
                if(waqt!="All") {
                    for(let i=0;i<(type=="Weekwise" ? 7 : Number(moment(formValues.date).endOf('month').format("D")));i++) {
                        let d = moment(formValues.date).add(i,'days').format("D")
                        let m = moment(formValues.date).add(i,'days').format("MMMM")
                        msg = msg + "<div class='col-6 waqt-card'><h4 class='page-title'>"+m+" "+d+"</h4><p>Start: <span>" + moment(x[m][d][waqt]["Start"], "HH:mm").format("h:mm a") + "</span><br/>End: <span>" + (x[m][d][waqt]["End"] ? moment(x[m][d][waqt]["End"], "HH:mm").format("h:mm a") : "Until Next Waqt") + "</span></p></div>"
                    }
                } else {
                    for(let i=0;i<(type=="Weekwise" ? 7 : Number(moment(formValues.date).endOf('month').format("D")));i++) {
                        let d = moment(formValues.date).add(i,'days').format("D")
                        let m = moment(formValues.date).add(i,'days').format("MMMM")
                        msg = msg + "<h3 class='page-title'>" + m + " " + d + "</h3>"
                        Object.keys(x[m][d]).map((w:any)=>{
                            msg = msg + "<div class='col-6 waqt-card'><h4 class='page-title'>"+w+"</h4><p>Start: <span>" + moment(x[m][d][w]["Start"], "HH:mm").format("h:mm a") + "</span><br/>End: <span>" + (x[m][d][w]["End"] ? moment(x[m][d][w]["End"], "HH:mm").format("h:mm a") : "Until Next Waqt") + "</span></p></div>"
                        })
                    }
                }
            }
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

                    {(type=="Daywise" ? moment(formValues.date).format("D MMMM ") : type=="Weekwise" ? (moment(formValues.date).format("D MMMM ")+" - "+moment(formValues.date).add(6,'days').format("D MMMM ")) : moment(formValues.date).format("MMMM "))+formValues?.waqt?.value+" Timings"}

                    <button type="button" className="" onClick={onClose} style={{background:"none",border:"none",color:"#fff"}}>
                        <i className="fa fa-times" />
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="content row">
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