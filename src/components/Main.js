import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';

const Main = () => {
  return(
    <Route render={({location}) => (
      <TransitionGroup className="site-transition">
        <CSSTransition key={location.key} classNames="stack" timeout={900}>
          <Switch location={location}>
            <Route exact path ="/" component={Home} />
            <Route path="/w/:id" component={Work} />
            <Route path="/about" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
    />
  )
}

export default Main;
