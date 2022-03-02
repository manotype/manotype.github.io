import React from 'react';

class ContentMediumFeatureRev extends React.Component {
  render() {
    return (
      <section className="content-medium-feature auto-height">
        <div className="container grid col-3">
          <p className="align-center" >{this.props.children}</p>
          <div className="image">
            <img src={`${this.props.hero}`} alt="portfolio piece" />
          </div>
        </div>


      </section>
      )
  }
}

export default ContentMediumFeatureRev
