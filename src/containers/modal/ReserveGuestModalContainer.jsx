import React from 'react';
import { useSelector } from 'react-redux';
import EditGuestModalOrganism from '../../components/UI/organisms/organisms-reservation/organisms-modal/EditGuestModalOrganism';

const ReserveGuestModalContainer = ({
  manageGuestModal,
  clearGuest,
  saveGuest,
}) => {
  const { peopleLimit } = useSelector(({ reserve }) => reserve.infoRes);
  const { numOfAdult, numOfKid, numOfInfant } = useSelector(
    ({ reserve }) => reserve.guestSearch,
  );

  const disabled = numOfAdult + numOfKid + numOfInfant ? 'true' : 'false';
  console.log(disabled);
  return (
    <EditGuestModalOrganism
      manageGuestModal={manageGuestModal}
      clearGuest={clearGuest}
      saveGuest={saveGuest}
      peopleLimit={peopleLimit}
    />
  );
};

export default ReserveGuestModalContainer;
