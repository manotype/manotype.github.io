import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../static/img/linkedin-ico.svg';
import email from '../static/img/email-ico.svg';
import phone from '../static/img/phone-ico.svg';
import WorkNav from './WorkNav';

class SiteNavMenu extends React.Component {
  render() {
    let open = this.props.open;
    let toggleClass;

    open ? (toggleClass="open"):(toggleClass="closed")

    return(
      <nav className={`nav-menu ${toggleClass}`}>
        <div className="container auto-height work-section">
          <h2>Work</h2>
        </div>
        {/* WORK NAV */}
        <WorkNav action={this.props.action} />
        <div className="container grid col-2 column-gutter">
          <div className="responsive-grid">
            <h2>About</h2>
            {/* LIFT UP STATE */}
            <Link to="/about" onClick={this.props.action}><p className="menu-link">About Me</p></Link>
            <a href="/ajcook-cv-2018.pdf" download><p className="menu-link">Download Résumé</p></a>
          </div>
          <div className="responsive-grid contact">
            <div className="grid col-3 column-gutter contact-items">
              <div><a href="https://www.linkedin.com/in/aaronjcook" target="blank"><img src={linkedin} alt="LinkedIn" className="aButton" /><br /><p>Linked In</p></a></div>
              <div><a href="mailto:aaron@aaronjcook.design"><img src={email} alt="Email" className="aButton" /><br /><p>aaron@aaronjcook.design</p></a></div>
              <div><a href="tel:614-432-0778"><img src={phone} alt="Phone" className="aButton" /><br /><p>614·432·0778</p></a></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavMenu;
