import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { modalProps } from './Navbar'

const ModalButton = () => {
  // const {
//     buttonLabel,
//     className,
  //   name,
  //   current_price
  // } = topCoins;
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={toggle}>Calculator</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Crypto Wealth Calculator</ModalHeader>
        <ModalBody>
        Have some crypto? Calculate how much it's worth $$$.
        <Form inline>
   <FormGroup>
  <Label for="exampleNumber"></Label>
  <Input
    type="number"
    name="number"
    id="exampleNumber"
    placeholder="Enter Amount"
  />
</FormGroup>
</Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Calculate</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalButton;