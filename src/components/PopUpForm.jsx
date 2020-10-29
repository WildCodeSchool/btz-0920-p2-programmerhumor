import './popUpForm.css';

function PopUpForm(Contact) {
  return (
    <div className="window">
      <div className="popUp">
        <h1>Contact</h1>
        <form className="form">
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
          <button type="button" onClick={Contact.closePopUp}>
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUpForm;
