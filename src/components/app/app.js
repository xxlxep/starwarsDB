import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import './app.css';
import Row from '../row/row';
import ErrorBoundry from '../error-boundary/error-boundary';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import ItemDetails, { Record } from '../item-details/item-details';
export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const {
      getPerson,
      getStarship,
      getStarshipImage,
      getPersonImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;
    const personDetails = (
      <ItemDetails itemId={7} getData={getPerson} getImgUrl={getPersonImage}>
        <Record field="gender" label="gender" />
        <Record field="eyeColor" label="Eye Cokor" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails itemId={9} getData={getStarship} getImgUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className="container">
        <ErrorBoundry>
          <div className="stardb-app">
            <Header />
            <Row left={personDetails} right={starshipDetails} />
            <ItemList getData={getAllPeople} onItemSelected={() => {}}>
              {({ name }) => <span>{name}</span>}
            </ItemList>
            <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
              {({ name }) => <span>{name}</span>}
            </ItemList>
          </div>
        </ErrorBoundry>
      </div>
    );
  }
}
