import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Footer from './Footer';
import Header2 from './Header2';

const Layout = ({ children }) => {
  return (
    <>
      <Header2 />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Layout;
