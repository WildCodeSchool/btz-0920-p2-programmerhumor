import { Button, NavLink } from 'reactstrap';
import PopUpForm from './PopUpForm';
import ScrollToTop from './ScrollToTop';
import './Footer2.css';

const Footer2 = () => {
  return (
    <div className="fixed-bottom border-top">
      <div className="footer py-2">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-4">
              <NavLink>
                <PopUpForm />
              </NavLink>
            </div>
            <div className="col-4">
              <Button className="mt-2">
                <ScrollToTop />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
