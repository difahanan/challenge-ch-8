import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

function InfoPlayer({ modal, toggle, playerName }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>INFO PLAYER</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input id="playerName" name="playerName" value={playerName} disabled />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" outline onClick={toggle}>CLOSE</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default InfoPlayer;