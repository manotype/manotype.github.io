import React from 'react';
import Pieces from './Pieces';
import WorkNav from './WorkNav';
import WorkHero from './WorkHero';
import createLazyContainer from 'react-lazy-import';
import Footer from './Footer';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "Piece" : [] };
    this.state = { "Sections": []};
    this.state = { "PieceID": Number() };
    this.renderComponent = this.renderComponent.bind(this);
    this.state = { "Screen":"" };
  }

  componentWillMount() {
    const id = this.props.match.params.id - 1;
    Object.keys(Pieces).map((key)=> {
      return(Number(key) === id) ? (
        this.setState({Piece:Pieces[key]})
      ):(null);
      })
    this.setState({PieceID:Number(this.props.match.params.id)})
  }
  componentDidMount() {
    window.scrollTo(0,0);

    if(window.innerWidth > 600) {
      this.setState({Screen:"large"})
    } else {
      this.setState({Screen:"small"})
    }
  }

  renderComponent(sectionTag,key) {
    switch(sectionTag) {
      case 'columns':
        return (
        <ContentMultiColumn key={key}>
          <MultiColumnItem img={this.state.Piece.details.sections[key].img1} caption={this.state.Piece.details.sections[key].caption1} copy={this.state.Piece.details.sections[key].copy1} />
          <MultiColumnItem img={this.state.Piece.details.sections[key].img2} caption={this.state.Piece.details.sections[key].caption2} copy={this.state.Piece.details.sections[key].copy2}  />
          <MultiColumnItem img={this.state.Piece.details.sections[key].img3} caption={this.state.Piece.details.sections[key].caption3} copy={this.state.Piece.details.sections[key].copy3}  />
        </ContentMultiColumn>
        )
      case 'large':
        return (
          <ContentLargeFeature key={key} hero={this.state.Piece.details.sections[key].img} herosmall={this.state.Piece.details.sections[key].imgsmall} size={this.state.Screen}>{this.state.Piece.details.sections[key].p}</ContentLargeFeature>
        )
      case 'medium':
        return (
          <ContentMediumFeature key={key} hero={this.state.Piece.details.sections[key].img}>{this.state.Piece.details.sections[key].p}</ContentMediumFeature>
        )
      case 'medium-rev':
        return (
          <ContentMediumFeatureRev key={key} hero={this.state.Piece.details.sections[key].img}>{this.state.Piece.details.sections[key].p}</ContentMediumFeatureRev>
        )
      case 'text':
        return (
          <ContentText key={key} headline={this.state.Piece.details.sections[key].headline} copy={this.state.Piece.details.sections[key].copy}>{ (this.state.Piece.details.sections[key].result) ? (<p><span className="statistic">{this.state.Piece.details.sections[key].result}</span><span className="caption">{this.state.Piece.details.sections[key].caption}</span></p>) : ('') }</ContentText>
        )
      default:
        return null;
    }
  }


  render() {
    const piece = this.state.Piece;
    const section = this.state.Piece.details.sections;
    let sectionTag = '';
    let sectionId = Number();

    return(
      <div className="page-work">
        <WorkHero hero={`${piece.details.hero}`} herosmall={`${piece.details.herosmall}`} size={this.state.Screen}>
          <h1>{piece.name}</h1>
          <div className="overview">
            <p>{piece.details.about}</p>
          </div>
        </WorkHero>
        {
          Object.keys(piece.details.sections).map((key)=> {
            sectionTag = section[Number(key)].tag
            sectionId = Number(key)
            return this.renderComponent(sectionTag,sectionId)
          })
        }
        <h2 className="container">View Other Work</h2>
        <WorkNav />
        <Footer />
      </div>
    )
  }
}
export default Work;

const ContentLargeFeature = createLazyContainer(()=> import('./ContentLargeFeature'));
const ContentMultiColumn = createLazyContainer(() => import('./ContentMultiColumn'));
const ContentMediumFeature = createLazyContainer(() => import('./ContentMediumFeature'));
const ContentMediumFeatureRev = createLazyContainer(() => import('./ContentMediumFeature-rev'));
const MultiColumnItem = createLazyContainer(() => import('./MultiColumnItem'));
const ContentText = createLazyContainer(() => import('./ContentText'));
