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
      <div>
        <button type="button" onClick={this.popUp}>
          Contact
        </button>

        {showPopUp ? <PopUpForm closePopUp={this.popUp} /> : null}
      </div>
    );
  }
}

export default Contact;
