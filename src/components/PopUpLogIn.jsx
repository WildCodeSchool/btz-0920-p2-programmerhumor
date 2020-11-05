import { useState } from 'react';
/* eslint-disable react/prop-types */
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const PopUpLogIn = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button type="button" className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Button
        className="btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active m-3"
        color="outline-info"
        onClick={toggle}
      >
        {buttonLabel} Log in
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Log in
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Remember me
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active"
            color="outline-info"
            onClick={toggle}
          >
            Log in
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopUpLogIn;
