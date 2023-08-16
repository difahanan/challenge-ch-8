import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

function ModalPlayer({ modal, toggle }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader  toggle={toggle}>ADD PLAYER</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input id="text" name="text" placeholder="ADD PLAYER" type="text"/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" outline onClick={toggle}>SUBMIT</Button>
            <Button color="danger" outline onClick={toggle}>CANCEL</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPlayer;