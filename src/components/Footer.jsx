import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer_section">
        <Contact />
        <ScrollToTop />
      </div>
    </footer>
  );
}

export default Footer;
