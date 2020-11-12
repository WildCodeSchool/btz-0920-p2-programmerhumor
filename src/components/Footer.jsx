import { NavLink } from 'reactstrap';
import PopUpForm from './PopUpForm';
import ScrollToTop from './ScrollToTop';
import './Footer.css';

const Footer = () => {
  return (
    <div className="fixed-bottom border-top">
      <div className="footer py-2">
        <div className="container">
          <div className="d-flex justify-content-around">
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
      </div>
    </div>
  );
};

export default Footer;
