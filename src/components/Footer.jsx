import { NavLink } from 'reactstrap';
import PopUpForm from './PopUpForm';
import ScrollToTop from './ScrollToTop';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer fixed-bottom border-top py-2">
      <div className="container d-flex justify-content-around">
        <div className="col-4 text-center">
          <NavLink>
            <PopUpForm />
          </NavLink>
        </div>
        <div className="col-4 text-center">
          <div className="mt-2">
            <ScrollToTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
