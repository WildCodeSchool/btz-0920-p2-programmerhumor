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
import UserContext from '../UserContext';

const PopUpSignIn = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({});

  const toggle = () => setModal(!modal);
  const handleChange = (event) => {
    const [name] = event.target.name;
    setUser({ ...user, [name]: event.target.value });
  };

  const handleSubmit = () => {
    toggle();
  };

  const closeBtn = (
    <button type="button" className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <UserContext.Provider value={{ user }}>
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
                  value={user.UserName}
                  id="exampleUserName"
                  onChange={handleChange}
                  placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
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
                  value={user.password}
                  id="examplePassword"
                  onChange={handleChange}
                  placeholder=""
                />
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Your password must be 8-20 characters long, contain letters
                  and numbers.
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
              color="outline-info"
              onClick={handleSubmit}
            >
              Sign in
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </UserContext.Provider>
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
