function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo(0, 0, 'smooth');
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
