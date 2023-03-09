import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

interface SetLocationModalProps {
    onClose: () => void;
    shouldShow: boolean;
}


export default function SetLocationModal({ onClose, shouldShow }: SetLocationModalProps) {

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
                    Set Location
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-wrap mb-3">
                        <button type="button"
                            className="rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3"
                            onClick={onClose}>
                            Submit
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

}