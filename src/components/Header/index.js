import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {showMenu: false}

  showLinkItems = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  render() {
    const {showMenu} = this.state
    return (
      <div>
        <div className="Header-container">
          <img
            src="https://res.cloudinary.com/dx92sfkri/image/upload/v1660139558/COVID19INDIA_orirpi.png"
            alt="logo"
            className="header-logo"
          />
          <ul className="Header-links-lg">
            <li>
              <Link to="/" className="hearer-home-link-lg">
                Home
              </Link>
            </li>
            <li onClick={this.activeAboutLink}>
              <Link to="/about" className="hearer-home-link-lg">
                About
              </Link>
            </li>
          </ul>
          <div className="mobile-hamburger-icon">
            <button
              type="button"
              className="hamburger-btn"
              onClick={this.showLinkItems}
            >
              <img
                src="https://res.cloudinary.com/dx92sfkri/image/upload/v1660187781/add-to-queue_1_vhmhux.png"
                alt="hamburger"
                className="hamburger-menu"
              />
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="menu-section">
            <ul className="menu">
              <li>
                <Link to="/" className="hearer-home-link-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hearer-home-link-lg">
                  About
                </Link>
              </li>
            </ul>
            <AiFillCloseCircle size={20} className="cross-icon" />
          </div>
        )}
      </div>
    )
  }
}

export default Header
