import React from 'react';
import { Link } from 'react-router-dom';
import Pieces from './Pieces';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {"pieces":[]}
  }

  componentWillMount() {
    this.setState({pieces:Pieces})
  }

  render() {
    return(
      <section className="portfolio auto-height">
        <div className="container">
          <h2>Featured Work</h2>
          <div className="grid col-3 column-gutter row-gutter">
          {
            this.state.pieces.map((piece,i) => (
              (i<3) ? (
                <section key={i} className="light-gray grid col-3 preview-container" style={{backgroundImage:`url(${piece.previewImage})` }}>
                  <div className="preview-info align-center">
                    <h3>{piece.name}</h3>
                    <p>{piece.previewBlurb}</p>
                  </div>
                  <div className="cta align-center">
                    <Link className="button gray" to={`/w/${piece.id}`}>{piece.previewCTA}</Link>
                  </div>
                </section>
              ):(
                <Link key={i} className="secondary-feature-link" to={`/w/${piece.id}`}>
                <div className="secondary-feature grid light-gray" style={{ backgroundImage:`url(${piece.previewImage})`, backgroundPosition:"center" , backgroundSize:"cover" }}>
                  <div className="nameplate">{piece.name}</div>
                </div>
                </Link>
              )
            ))
          }
          </div>
        </div>
      </section>
    )
  }

}
export default Portfolio;
