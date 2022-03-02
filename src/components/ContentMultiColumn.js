import React from 'react';

class ContentMultiColumn extends React.Component {
  render() {
    return(
      <section className="content-multi-column auto-height">
        <div className="container grid col-3" >
            {this.props.children}
        </div>
      </section>
    )
  }
}

export default ContentMultiColumn
