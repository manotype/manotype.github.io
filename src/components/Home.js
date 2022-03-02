import React, { Component } from 'react';
import Portfolio from './Portfolio';
import NewsTicker from './NewsTicker';
import BrandExperience from './BrandExperience';
import Footer from './Footer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);


class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="page-home">
        <section className="home-aspot">
          <div className="container light-gray grid col-3 row-2 column-gutter">
            <div className="ajc-structure">
            </div>
            <div className="intro align-center">
                <h1>Hello, I’m Aaron Cook</h1>
                <p>
                  I am a designer that loves adding value to people’s lives by fulfilling their latent needs through utility, emotion, and technology.
                </p>
                <a href="/ajcook-cv-2018.pdf" download className="button">Download résumé</a>
            </div>
            <div className="creds align-center">
              <ul>
                <li>Design Thinking +</li>
                <li>Product Design +</li>
                <li>User Experience +</li>
                <li>Interaction +</li>
                <li>User Interface</li>
              </ul>
            </div>
          </div>
        </section>
        <NewsTicker />
        <Portfolio />
        <BrandExperience />
        <Footer />
      </div>
    )
  }
}
export default Home;
