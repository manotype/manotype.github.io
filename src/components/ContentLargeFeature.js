import React from 'react';

class ContentLargeFeature extends React.Component {
  render(){
    let bgImage;
    (this.props.size === 'large') ? (
      bgImage = this.props.hero
    ) : (
      bgImage = this.props.herosmall
    )

    return(
      <section className="content-large-feature">
        <div className="container light-gray grid col-3" style={{ backgroundImage:`url(${bgImage})` }}>
          <div className="align-center">
            <p>{this.props.children}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default ContentLargeFeature
