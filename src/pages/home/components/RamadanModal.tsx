import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

interface RamadanModalProps {
    shouldShow: boolean;
}

export default function RamadanModal({ shouldShow }: RamadanModalProps) {

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
                    Ramadan Kareem
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                        <img src="images/Ramadan.webp" />
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )

}