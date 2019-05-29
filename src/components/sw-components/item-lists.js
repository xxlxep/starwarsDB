import React from 'react';

import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';
const swapiService = new SwapiService();
const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;
const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
const renderName = ({ name }) => <span>{name}</span>;

const ListWithChildren = withData(withChildFunction(ItemList, renderName));
const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const StarshipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);
export { PersonList, PlanetList, StarshipList };
