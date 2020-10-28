function PopUpForm(closePopup) {
  return (
    <div className="popUp">
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">
          Name
          <input id="name" type="text" name="Name" />
        </label>
        <label htmlFor="email">
          email
          <input id="email" type="text" name="email" />
        </label>
        <label htmlFor="message">
          Message
          <textarea>Message</textarea>
        </label>
        <button type="button">Submit</button>
        <button type="button" onClick={closePopup}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default PopUpForm;
