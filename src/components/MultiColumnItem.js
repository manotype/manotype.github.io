import React from 'react';

class MultiColumnItem extends React.Component {
  render() {
    return (
    <div className="item">
      <img src={`${this.props.img}`} alt="portfolio piece" />
      <h3>{this.props.caption}</h3>
      <p>{this.props.copy}</p>
    </div>
    )
  }
}
export default MultiColumnItem
