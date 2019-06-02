import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import './app.css';
import ErrorBoundry from '../error-boundary/error-boundary';
import SwapiService from '../../services/swapi-service';
import TestService from '../../services/test-swap-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    swapiService: new TestService(),
  };
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? TestService : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <div className="stardb-app">
                <Header onServiceChange={this.onServiceChange} />
                {planet}
                <Route path="/people" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} />
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
