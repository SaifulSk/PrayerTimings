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
        var playButton = document.getElementById("play_button");
        let video: any = vidRef?.current
        if(video && playButton) {
        //     if(type=="on") {
        //         x.muted = false
        //     } else {
        //         x.muted = false
        //     }
        // }        
            // Event listener for the play/pause button
            if (video.paused == true) {
                // Play the video
                video.play();

                // Update the button text to 'Pause'
                playButton.innerHTML = "Pause";
            } else {
                // Pause the video
                video.pause();

                // Update the button text to 'Play'
                playButton.innerHTML = "Play";
            }
        }
    }

    const vidClicked = () => {
        let video: any = vidRef?.current
        if(video) {
            video.muted = false
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setCrossActive(true)
        //     let x:any=document.getElementById("play_button")
        //     if(x) {
        //         x.click()
        //     }
        //     // let x:any=document.getElementById("azanVid")
        //     // if(x) {
        //     //     x.play()
        //     // }
        },15000)
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
                        <video width="100%" id="azanVid" preload='auto'
                            autoPlay
                            muted={true}
                            onClick={()=>vidClicked()}
                            onEnded={()=>closeAzanModal()} ref={vidRef}>
                            {waqt=="Fajr" ?
                                <source src="images/FajrAzan.mp4" type="video/mp4" />
                                :
                                <source src="images/Azan.mp4" type="video/mp4" />
                            }
                            Your browser does not support the video tag.
                        </video>
                        <h4 className="msg-text">Click the above video to listen to the Adhan</h4>
                        {/* <button id="play_button" onClick={()=>btnClicked()}>Play</button> */}
                        {/* <i className="fa fa-volume-up" onClick={()=>btnClicked("on")}/> */}
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )

}