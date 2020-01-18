import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import AboutMe from '../../pages/AboutMe/aboutme';
import Contact from '../../pages/Contact/Contact';
import Links from '../../pages/Links/Links';
import Porfolio from '../../pages/PortfolioPage/PortfolioPage';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.AboutMe} component={AboutMe} />
      <Route exact path={ROUTES.Contact} component={Contact} />
      <Route exact path={ROUTES.Links} component={Links} />
      <Route exact path={ROUTES.Porfolio} component={Porfolio} />
    </div>
  </Router>
);

export default App;