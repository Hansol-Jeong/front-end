import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleStyle from '../../components/UI/organisms/organisms-list/GoogleMapSt';

const GoogleMapContainer = React.memo(() => {
  console.log('rerender!');
  const room = useSelector((state) => state.search.searchRes);
  const {
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  } = useSelector((state) => state.search.searchReq);
  const [roomMap, setRoomMap] = useState([]);
  // console.log('locationSearch', locationSearch);
  // console.log('checkDateSearch', checkDateSearch);
  // console.log('guestSearch', guestSearch);
  // console.log('costSearch', costSearch);
  // console.log('roomType', roomType);
  // console.log('bedNum', bedNum);
  // console.log('bedRoomNum', bedRoomNum);
  // console.log('bathRoomNum', bathRoomNum);
  useEffect(() => {
    const roomMap = room.map((item) => {
      return {
        id: item.id,
        name: item.name,
        latitude: item.latitude,
        longitude: item.longitude,
        commentCount: item.commentCount,
        cost: item.cost,
        roomImgUrlList: item.roomImgUrlList,
        roomType: item.roomType,
      };
    });
    setRoomMap(roomMap);
  }, [room]);

  return (
    <GoogleStyle
      locationSearch={locationSearch}
      checkDateSearch={checkDateSearch}
      guestSearch={guestSearch}
      costSearch={costSearch}
      roomType={roomType}
      bedNum={bedNum}
      bedRoomNum={bedRoomNum}
      bathRoomNum={bathRoomNum}
      roomMap={roomMap}
      style={{ flexShrink: '1' }}
    />
  );
});

export default GoogleMapContainer;
