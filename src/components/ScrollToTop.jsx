import { useContext, useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import UserContext from '../UserContext';
import './scrollToTop.css';

const ScrollToTop = () => {
  const [topScroll, settopScroll] = useState(false);

  const { darkMode } = useContext(UserContext);

  const checkScrollTop = () => {
    if (!topScroll && window.pageYOffset > 400) {
      settopScroll(true);
    } else if (topScroll && window.pageYOffset <= 400) {
      settopScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <IoIosArrowDropup
      size={50}
      color={darkMode ? 'white' : '#585e68'}
      className={topScroll && 'scrollTopOrange'}
      onClick={scrollTop}
    />
  );
};

export default ScrollToTop;
