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
import { useState } from 'react';

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
      <Button color="#f8f9fa" onClick={toggle}>
        {buttonLabel}Contact
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Contact
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleUserName">User Name</Label>
              <Input
                type="UserName"
                name="UserName"
                id="exampleUserName"
                placeholder="UserName placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopUpForm;

/* </div> <Button>Submit</Button>
      <Button onClick={Contact.closePopUp}>Annuler</Button>
    */
