import { Component } from 'react';
import PopUpForm from './PopUpForm';
import './contact.css';

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
        <a href onClick={this.popUp}>
          Contact
        </a>

        {showPopUp ? <PopUpForm closePopUp={this.popUp} /> : null}
      </div>
    );
  }
}

export default Contact;
