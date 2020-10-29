import { Component } from 'react';
import menuItems from './menuItems';
import Button from '../Button';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  render() {
    const { clicked } = this.state;
    return (
      <nav className="HeaderItems">
        <h1 className="header-logo">
          Reddit
          <i className="fab fa-reddit" />
        </h1>
        <button type="button" className="menu-icon" onClick={this.handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}

export default Header;
