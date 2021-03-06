import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import GoogleMapUse from '../../molecules/molecules-list/GoogleMap';
import React from 'react';

const PcSize = styled.main`
  display: block;
  margin-top: -176px;
  /* margin-top: -80px;/ */
  /* padding-top: 80px; */
  top: 0;
  right:0;
  position: sticky;

  /* top: 0; */
  width: 100%;
  min-width: calc(100vw - 842px);
  /* min-width:calc(100vh - 120px); */
  height: 100vh;
`;

const TabletSize = styled.main`
  display: none;
`;

const MobileSize = styled.main`
  /* width : calc(100%-100%); */
  /* background-color: yellow; */
  display: none;
`;

const GoogleStyle = React.memo(
  ({
    roomMap,
    roomType,
    bathRoomNum,
    bedRoomNum,
    bedNum,
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
  }) => {
    const isPc = useMediaQuery({
      query: '(min-width: 1127px)', //1025 px 이상인 경우에만 적용(1127이상.)
    });
    const isTablet = useMediaQuery({
      query: `(min-width: 744px)and (max-width: 1126px)`,
    });
    const isMobile = useMediaQuery({
      query: `(max-width: 743px)`, //744px 이하인 경우에만 적용(744이하.)
    });

    return (
      <>
        {isPc && (
          <PcSize className="Asidemap">
            <GoogleMapUse
              roomMap={roomMap}
              locationSearch={locationSearch}
              checkDateSearch={checkDateSearch}
              guestSearch={guestSearch}
              costSearch={costSearch}
              roomType={roomType}
              bedNum={bedNum}
              bedRoomNum={bedRoomNum}
              bathRoomNum={bathRoomNum}
            />
          </PcSize>
        )}
        {isTablet && (
          <TabletSize className="Asidemap">{/* <GoogleMapUse /> */}</TabletSize>
        )}
        {isMobile && (
          <MobileSize className="Asidemap">{/* <GoogleMapUse /> */}</MobileSize>
        )}
      </>
    );
  },
);

export default GoogleStyle;
