import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm';

const Login = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button  onClick={toggle} className="login-button">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
            <LoginForm/>
        </ModalBody>
        <ModalFooter>
          Currently not posible to change password due to technical alpha!
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;