import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/item-list';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
        {(item) => (`${item.name}`)}
      </ItemList>
    );
    const personDetails = <PersonDetails personId={this.state.selectedPerson} />;
    return <Row left={itemList} right={personDetails} />;
  }
}
