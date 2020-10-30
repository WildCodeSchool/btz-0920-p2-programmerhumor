function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="scrollToTop"
      className="footerButton"
      onClick={handleClick}
    >
      Scroll to top
    </button>
  );
}

export default ScrollToTop;
