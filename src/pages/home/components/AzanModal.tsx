import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import moment from 'moment'

interface AzanModalProps {
    shouldShow: boolean;
    closeAzanModal: Function;
    waqt: string;
}

export default function AzanModal({ shouldShow, closeAzanModal, waqt }: AzanModalProps) {

    const vidRef = useRef(null)
    const [crossActive, setCrossActive] = useState<boolean>(false)

    const btnClicked = () => {
        console.log("Clicked")
        // let x:any=document.getElementById("azanVid")
        let x: any = vidRef?.current
        if(x) {
            console.log(x.muted)
            x.muted = false
            console.log(x.muted)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setCrossActive(true)
        //     let x:any=document.getElementById("azanBtn")
        //     if(x) {
        //         x.click()
        //     }
        //     // let x:any=document.getElementById("azanVid")
        //     // if(x) {
        //     //     x.play()
        //     // }
        },10000)
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
                    {waqt} Azan
                    {crossActive && <button type="button" className="" onClick={()=>closeAzanModal()} style={{background:"none",border:"none",color:"#fff"}}>
                        <i className="fa fa-times" />
                    </button>}
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                        <video width="100%" id="azanVid" preload='auto' autoPlay
                            // muted={true}
                            onEnded={()=>closeAzanModal()} ref={vidRef}>
                            {waqt=="Fajr" ?
                                <source src="images/FajrAzan.mp4" type="video/mp4" />
                                :
                                <source src="images/Azan.mp4" type="video/mp4" />
                            }
                            Your browser does not support the video tag.
                        </video>
                        {/* <button id="azanBtn" onClick={()=>btnClicked()}></button> */}
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )

}