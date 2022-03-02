import React from 'react';
import WorkLink from './WorkLink';
import Pieces from './Pieces';

class WorkNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"pieces": []}
    this.state = {"count": Number()}
    this.state = {"screenWidth": Number()}
  }

  componentWillMount() {
    this.setState({ pieces:Pieces })
    this.setState({ count:Number(Pieces.length) })
  }

  componentDidMount() {
    this.setState({ screenWidth:window.innerWidth })
  }

  render() {
    let factor;
    factor = (this.state.screenWidth >= 1024) ? ( Number(.25)):(factor = Number(.6));
    let containerWidth = `${((Number(this.state.screenWidth) * factor) * Number(this.state.count)) + (this.state.count * 32)}px`;
    let piecesWidth = { width:containerWidth };

    const pieceDisplay = this.state.pieces.map((piece) => {
      return(
        <WorkLink key={piece.id} img={piece.thumb} id={piece.id} action={this.props.action} />
      )
    });

    return (
      <div className="slide-container">
        <div className="pieces-container" style={piecesWidth}>
          {pieceDisplay}
        </div>
      </div>
    )
  }
}

export default WorkNav;
