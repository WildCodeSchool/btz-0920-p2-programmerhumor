import { Component } from 'react';
import PopUpForm from './PopUpForm';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showPopUp: false,
    };
    this.popUp = this.popUp.bind(this);
  }

  popUp() {
    const { showPopUp } = this.state;
    this.setState({
      showPopUp: !showPopUp,
    });
  }

  render() {
    const { showPopUp } = this.state;
    return (
      <button type="button" onClick={this.popUp}>
        Contact
        {showPopUp ? <PopUpForm closePopup={this.popUp} /> : null}
      </button>
    );
  }
}

export default Contact;
