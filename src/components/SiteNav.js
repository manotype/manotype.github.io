import React from 'react';
import { Link } from 'react-router-dom';
import SiteNavMenu from './SiteNavMenu';
import openMenuButton  from '../static/img/menu-icon.svg';
import closeMenuButton from '../static/img/close-menu-button.svg';
import ajcLogo from '../static/img/ajc-monogram-dot.svg';


class SiteNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen:false }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  toggleMenu() {
    this.setState(prevState=> ({
      isOpen: !prevState.isOpen
    }))
  }

  resetState(e) {
    return this.state.isOpen === true ? (this.setState({ isOpen:false })):(null);
  }

  render() {
    let buttonImage = this.state.isOpen ? (
      <img src={closeMenuButton} alt="Close Menu" />
    ):(
      <img src={openMenuButton} alt="Open Menu" />
    );

    return(
      <div>
        <header>
          <Link to='/' onClick={this.resetState}><img src={ajcLogo} className="site-logo aButton" alt="Aaron J Cook" /></Link>
          <a className="menu-button aButton" onClick={this.toggleMenu}>{buttonImage}</a>
        </header>
        <SiteNavMenu open={this.state.isOpen} action={this.toggleMenu} />
      </div>
    )
  }
}
export default SiteNav;
