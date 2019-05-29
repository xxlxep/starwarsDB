import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;

  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImgUrl={getPlanetImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotatioiodn Per" />
    </ItemDetails>
  );
};
export default withSwapiService(PlanetDetails);
