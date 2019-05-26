import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorButton from '../error-button/error-bitton';
import './app.css';
import ErrorBoundry from '../error-boundary/error-boundary';
export default class App extends Component {
  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <div className="container">
        <ErrorBoundry>
          <div className="stardb-app">
            <Header />
            {planet}

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
            </button>
              <ErrorButton />
            </div>

            <PeoplePage />

          </div>
        </ErrorBoundry>
      </div>

    );
  }
}
