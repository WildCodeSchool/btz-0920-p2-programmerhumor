import { useContext, useState } from 'react';
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

const PopUpLogIn = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);
  const [entries, setEntries] = useState({});

  const handleChange = (event) => {
    const [name] = event.target.name;
    setEntries({ ...entries, [name]: event.target.value });
  };
  const toggle = () => setModal(!modal);

  const { user } = useContext(UserContext);

  const errorMessage = () => {
    // eslint-disable-next-line no-alert
    alert(`Authentification échouée, veuillez réessayer`);
  };

  const logMessage = () => {
    // eslint-disable-next-line no-alert
    alert(`Bienvenue ${user.U}`);
  };

  const handleSubmit = () => {
    if (user.e === entries.e && user.p === entries.p) {
      toggle();
      logMessage();
    } else {
      errorMessage();
    }
  };
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
                onChange={handleChange}
                value={entries.email}
                id="exampleEmail"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={entries.password}
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
            onClick={handleSubmit}
          >
            Log in
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

PopUpLogIn.defaultProps = {
  buttonLabel: ' ',
  className: ' ',
};

PopUpLogIn.propTypes = {
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
};

export default PopUpLogIn;
