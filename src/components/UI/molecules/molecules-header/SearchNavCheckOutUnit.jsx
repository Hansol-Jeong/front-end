import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { specificInputClear } from '../../../../modules/search';
import RemoveButton from '../../atoms/atoms-header/RemoveButton';
import Text from '../../atoms/atoms-header/Text';

const SearchNavCheckOutUnitLi = styled.li`
  padding: 14px 24px;
  border-radius: 30px;
  &:hover {
    background-color: rgb(235, 231, 231);
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.navModalState.checkOut &&
    css`
      background-color: rgb(235, 231, 231);
    `}
`;
const SearchNavCheckOutUnit = ({ SearchTypeHandler, navModalState }) => {
  const dispatch = useDispatch();
  const { endDate } = useSelector(
    (state) => state.search.searchReq.checkDateSearch,
  );

  return (
    <SearchNavCheckOutUnitLi
      onClick={(e) => {
        if (!e.target.matches('checkout-remove-btn')) {
          SearchTypeHandler('checkOut');
        }
      }}
      onFocus={() => {
        SearchTypeHandler('checkOut');
      }}
      tabIndex="0"
      navModalState={navModalState}
    >
      <Text small bold block noPadding>
        체크아웃
      </Text>
      {endDate ? (
        <Text block noPadding>
          {endDate}
        </Text>
      ) : (
        <Text block noPadding gray>
          날짜추가
        </Text>
      )}
      {!!endDate && navModalState.checkOut && (
        <RemoveButton
          className="checkout-remove-btn"
          checkOutDate
          onMouseDown={(e) => {
            dispatch(specificInputClear('checkDateSearch'));
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter')
              dispatch(specificInputClear('checkDateSearch'));
          }}
        />
      )}
    </SearchNavCheckOutUnitLi>
  );
};

export default SearchNavCheckOutUnit;
