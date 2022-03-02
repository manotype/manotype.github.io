import React from 'react';
import arrow from '../static/img/more-arrow.svg';

class WorkHero extends React.Component {
  render() {
    let bgImage;
    (this.props.size === 'large') ? (
      bgImage = this.props.hero
    ) : (
      bgImage = this.props.herosmall
    )

    return (
      <section className="work-hero" style={{ backgroundImage:`url(${bgImage})` }}>
        <div className="hero-content container col-3">
          {this.props.children}
          <div className="more"><img src={arrow}  alt="scroll for more" /></div>
        </div>
      </section>
    )
  }
}

export default WorkHero;
