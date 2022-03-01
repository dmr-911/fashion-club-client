import React from 'react';
import { Modal } from 'react-bootstrap';

const PurchaseModal = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p className="text-center">
            Payment system coming soon!
          </p>
        </Modal.Body>
      </Modal>
    );
};

export default PurchaseModal;