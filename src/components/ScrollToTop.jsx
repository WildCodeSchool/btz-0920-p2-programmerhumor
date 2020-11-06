import { useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import './scrollToTop.css';

const ScrollToTop = () => {
  const [topScroll, settopScroll] = useState(false);

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
      color="#585e68"
      className={topScroll && 'scrollTopOrange'}
      onClick={scrollTop}
    />
  );
};

export default ScrollToTop;
