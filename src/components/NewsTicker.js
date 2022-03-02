import React from 'react';

class NewsTicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { "id":0, "length":null };
    this.changeNews = this.changeNews.bind(this);
  }

  componentWillMount() {
    this.setState({"length":news.length - 1});
  }

  componentDidMount() {
    return this.state.length <= 1 ? (this.timerID = setInterval(
      () => this.changeNews(),
      5000
    )) : (null);
  }

  componentWillUnmount() {
    return this.timerID ? (clearInterval(this.timerID)):(null);

  }

  changeNews() {
    this.setState({"id":this.state.id + 1});
    return this.state.id > this.state.length ? (this.setState({"id":0})):(null);
  }

  render() {
    const items = news.map((item) => {
      return <ItemContainer key={item.id} date={item.date} headline={item.headline} toggle={ item.id === this.state.id ? ('show'):('hide') } />
    })
    return(
      <section className="news-ticker auto-height">
        <div className="container item-container">
          <div className="item-bucket">{items}</div>
        </div>
      </section>
    )
  }
};
class ItemContainer extends React.Component {
  render(){
    return(
      <p className={`news-item ${this.props.toggle}`}><span>{this.props.date}</span>{this.props.headline} <span>{this.props.id}</span></p>
    )
  }
}
const news = [
  {
    "id":0,
    "date":"June 14 · 2018",
    "headline":"I am currently looking for local or remote product design opportunities (freelance or full-time)"
  }
];

export default NewsTicker;
