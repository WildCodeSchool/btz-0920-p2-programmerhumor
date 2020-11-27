import { useContext } from 'react';
import { NavLink } from 'reactstrap';
import PopUpForm from './PopUpForm';
import ScrollToTop from './ScrollToTop';
import './Footer.css';
import UserContext from '../UserContext';

const Footer = () => {
  const { darkMode } = useContext(UserContext);

  return (
    <div
      className={
        darkMode
          ? 'footer-dark-mode fixed-bottom border-top py-2'
          : 'footer-light-mode fixed-bottom border-top py-2'
      }
    >
      <div className="container d-flex justify-content-around">
        <div className="col-4 text-center">
          <NavLink>
            <PopUpForm />
          </NavLink>
        </div>
        <div className="col-4 text-center">
          <div>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
