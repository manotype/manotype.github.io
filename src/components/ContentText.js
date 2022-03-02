import React from 'react';

class ContentText extends React.Component{
  render(){
    return(
    <section className="content-text auto-height">
      <div className="container grid col-4">
        <div className="col">
          <h3>{this.props.headline}</h3>
          <p>{this.props.copy}</p>
          {this.props.children}
        </div>
      </div>
    </section>
    )
  }
}
export default ContentText
