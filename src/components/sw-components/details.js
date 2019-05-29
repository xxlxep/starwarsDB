import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';
const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
        return (
          <ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getPersonImage}>
            <Record field="gender" label="gender" />
            <Record field="eyeColor" label="Eye Cokor" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
        return (
          <ItemDetails itemId={itemId} getData={getPlanet} getImgUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotatioiodn Per" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getStarshipImaage }) => {
        return (
          <ItemDetails itemId={itemId} getData={getStarship} getImgUrl={getStarshipImaage}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};
export { PersonDetails, PlanetDetails, StarshipDetails };
