import React from 'react';

class ContentMediumFeature extends React.Component {
  render() {
    return (
      <section className="content-medium-feature auto-height">
        <div className="container grid col-3">
          <div className="image">
            <img src={`${this.props.hero}`} alt="portfolio piece" />
          </div>
          <p className="align-center" >{this.props.children}</p>
        </div>


      </section>
    )
  }
}

export default ContentMediumFeature
