import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeletePlayer({ modal, toggle, playerName, confirmDelete }) {
  const handleConfirmDelete = () => {
    confirmDelete();
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>DELETE PLAYER</ModalHeader>
      <ModalBody>
        <p>DO YOU WANT TO REMOVE THIS PLAYER?</p>
        <p>PLAYER: {playerName}</p>
      </ModalBody>
      <ModalFooter>        
        <Button color="danger" outline onClick={handleConfirmDelete}>DELETE</Button>
        <Button color="dark" outline onClick={toggle}>CANCEL</Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeletePlayer;