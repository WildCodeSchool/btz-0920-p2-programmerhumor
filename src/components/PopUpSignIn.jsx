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
import { ToastContainer, toast, Slide } from 'react-toastify';
import UserContext from '../UserContext';
import 'react-toastify/dist/ReactToastify.css';

const PopUpSignIn = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const toggle = () => setModal(!modal);
  const handleChange = (event) => {
    const [name] = event.target.name;
    setUser({ ...user, [name]: event.target.value });
  };

  const accreate = () => {
    toast(
      `Congratulations ${user.U}. You have created your account. Please login.`,
      {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        className: 'toastSuccess',
      }
    );
  };
  const notvalidemail = () => {
    toast(`Your email address is invalid, please try again.`, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      className: 'toastFailed',
    });
  };
  const errorcreate = () => {
    toast('Please fill out all mandatory fields.', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      className: 'toastFailed',
    });
  };

  const handleSubmit = () => {
    if (!user.e.split('').includes('@')) {
      notvalidemail();
    } else if (user.U !== '' && user.e !== '' && user.p !== '') {
      toggle();
      accreate();
    } else {
      errorcreate();
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
        <ToastContainer />
        <ModalFooter>
          <Button
            className="btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active"
            onClick={handleSubmit}
            color="outline-light"
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
