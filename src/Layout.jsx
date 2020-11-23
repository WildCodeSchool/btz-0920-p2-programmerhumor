import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
