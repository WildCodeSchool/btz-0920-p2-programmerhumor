import { useState } from 'react';
import PropTypes from 'prop-types';
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

const PopUpSignIn = ({ buttonLabel, className }) => {
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
        color="outline-light"
        onClick={toggle}
      >
        {buttonLabel} Sign in
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Sign in
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleUserName">Name</Label>
              <Input
                type="UserName"
                name="UserName"
                id="exampleUserName"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder=""
              />
              <small id="emailHelp" className="form-text text-muted">
                We will never share your email with anyone else.
              </small>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder=""
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Your password must be 8-20 characters long, contain letters and
                numbers.
              </small>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Agree to terms and conditions
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active"
            color="outline-light"
            onClick={toggle}
          >
            Sign in
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

PopUpSignIn.defaultProps = {
  buttonLabel: ' ',
  className: ' ',
};

PopUpSignIn.propTypes = {
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
};

export default PopUpSignIn;
