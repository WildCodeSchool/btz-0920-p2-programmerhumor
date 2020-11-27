import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import UserContext from './UserContext';
import './Layout.css';

const Layout = ({ children }) => {
  const { darkMode } = useContext(UserContext);
  return (
    <>
      <Header />
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
