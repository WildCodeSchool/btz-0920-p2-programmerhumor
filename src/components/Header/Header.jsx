import { Component } from 'react';
import { FcReddit } from 'react-icons/fc';
import { IoIosArrowDown } from 'react-icons/io';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
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
        <div className="fab fa-reddit">
          <FcReddit />
        </div>
        <h1 className="header-logo">Reddit</h1>
        <button type="button" className="menu-icon" onClick={this.handleClick}>
          <i className={clicked ? <FaTimes /> : <GoThreeBars />} />
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
        <Button>
          <IoIosArrowDown />
        </Button>
      </nav>
    );
  }
}

export default Header;
