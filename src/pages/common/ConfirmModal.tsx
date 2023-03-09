import React from 'react';
import { Modal } from 'react-bootstrap';

interface ConfirmModalProps {
    onSuccess?: (success: any) => void;
    onClose: (success: any) => void;
    shouldShow: boolean;
    message: any;
    type: number;
}


export default function ConfirmModal({ onSuccess, onClose, shouldShow, message, type }: ConfirmModalProps) {

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
                <Modal.Body>
                    <div className="modal-body">
                        <h4 className="rider-name-content">{message}</h4>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-wrap mb-3">
                        <button type="button"
                            className="rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3"
                            onClick={onClose}>
                            {type==2 ? "No" : "Ok" }
                        </button>
                    </div>
                    {type==2 && <div className="btn-wrap mb-3">
                        <button type="button"
                            className="rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3"
                            onClick={onSuccess}>
                            Yes
                        </button>
                    </div>}
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

}