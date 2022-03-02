import React from 'react';
import { NavLink } from 'react-router-dom';
import check from '../static/img/selected.svg';

class WorkLink extends React.Component {

  render() {
    return(
      <div className="thumb-container">
        <NavLink to={`/w/${this.props.id}`} activeClassName="current-piece" className="img-container" onClick={this.props.action}>
          <div className="checkmark"><img src={check} alt="selected piece" /></div>
          <img src={this.props.img} alt="Hello" className="thumb-img" />
        </NavLink>
      </div>
    )
  }
}

export default WorkLink;
