import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImaage } = swapiService;

  return (
    <ItemDetails itemId={itemId} getData={getStarship} getImgUrl={getStarshipImaage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};
export default withSwapiService(StarshipDetails);
