import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorButton from '../error-button/error-bitton';
import './app.css';

export default class App extends Component {
  state = { hasError: false };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <Header />

        <RandomPlanet />
        <div className="row mb2 button-row">
          <ErrorButton />
        </div>
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
