import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { specificInputClear } from '../../../../modules/search';
import RemoveButton from '../../atoms/atoms-header/RemoveButton';
import Text from '../../atoms/atoms-header/Text';

const SearchNavCheckInUnitLi = styled.li`
  padding: 14px 24px;
  border-radius: 30px;
  &:hover {
    background-color: rgb(235, 231, 231);
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.navModalState.checkIn &&
    css`
      background-color: rgb(235, 231, 231);
    `}
`;

const SearchNavCheckInUnit = ({ SearchTypeHandler, navModalState }) => {
  const dispatch = useDispatch();
  const { startDate } = useSelector(
    (state) => state.search.searchReq.checkDateSearch,
  );

  return (
    <SearchNavCheckInUnitLi
      onClick={() => {
        SearchTypeHandler('checkIn');
      }}
      onFocus={() => {
        SearchTypeHandler('checkIn');
      }}
      onBlur={() => {}}
      tabIndex="0"
      navModalState={navModalState}
    >
      <Text small bold block noPadding>
        체크인
      </Text>
      {startDate ? (
        <Text block noPadding>
          {startDate}
        </Text>
      ) : (
        <Text block noPadding gray>
          날짜추가
        </Text>
      )}
      {!!startDate && navModalState.checkIn && (
        <RemoveButton
          checkInDate
          onMouseDown={() => {
            dispatch(specificInputClear('checkDateSearch'));
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter')
              dispatch(specificInputClear('checkDateSearch'));
          }}
        />
      )}
    </SearchNavCheckInUnitLi>
  );
};

export default SearchNavCheckInUnit;
