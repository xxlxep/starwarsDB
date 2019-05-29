import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';
const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getPersonImage}>
      <Record field="gender" label="gender" />
      <Record field="eyeColor" label="Eye Cokor" />
    </ItemDetails>
  );
};
export default withSwapiService(PersonDetails);
