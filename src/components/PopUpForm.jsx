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

const PopUpForm = (props) => {
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
      <Button color="outline-info" onClick={toggle}>
        {buttonLabel}Contact
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Contact
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
              <Label for="exampleText">Message</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                resize="none"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="outline-info" onClick={toggle}>
            Send
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

PopUpForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PopUpForm;
