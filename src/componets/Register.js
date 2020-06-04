import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegisterForm from './RegisterForm';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="register-modal d-flex align-items-center ml-2">
      <Button type="button" onClick={toggle} className="register-button">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Register User</ModalHeader>
        <ModalBody>
            <RegisterForm/>
        </ModalBody>
        <ModalFooter>
          You must register in order to enter the Action House
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;