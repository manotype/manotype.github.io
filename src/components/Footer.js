import React, { Component } from 'react';
import linkedin from '../static/img/linkedin-ico.svg';
import email from '../static/img/email-ico.svg';
import phone from '../static/img/phone-ico.svg';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div>
          <p>Aaron J Cook Design &middot; Columbus, OH</p>
          <p className="copyright">&copy;Aaron J Cook. All rights reserved.</p>
          </div>
          <div className="contacts">
            <a href="https://www.linkedin.com/in/aaronjcook" target="blank"><button type="button" target="blank" className="aButton"><img src={linkedin} alt="LinkedIn" /></button></a>
            <a href="mailto:aaron@aaronjcook.design"><button type="button" className="aButton"><img src={email} alt="Email" /></button></a>
            <a href="tel:614-432-0778"><button type="button" className="aButton"><img src={phone} alt="Phone" /></button></a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer;
