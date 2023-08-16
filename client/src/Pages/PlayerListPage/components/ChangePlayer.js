import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

function ChangePlayer({ modal, toggle, handleNameChange }) {
  const [newName, setNewName] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const handleSubmit = () => {
    setNewName('');
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>CHANGE PLAYER NAME</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input id="newPlayerName" name="newPlayerName" value={newName} onChange={handleChange} placeholder="CHANGE PLAYER NAME"/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" outline onClick={handleSubmit}>SUBMIT</Button>
          <Button color="danger" outline onClick={toggle}>CANCEL</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ChangePlayer;