import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { CgLoadbarAlt } from 'react-icons/cg';
const ani = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }

`;

const ani1 = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  70% {
    transform: scale(0.5);
  }

`;
const ani3 = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }
  

`;
const PersonalNameInputStyle = styled.div`
  .person-info {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    /* flex-wrap: wrap; */
    div {
      display: flex;
      flex-direction: column;
      margin-right: 15px;

      width: 100%;
      margin-top: 15px;
      label {
        font-size: 1.8rem;
      }
      input {
        padding: 10px;
        /* outline: none; */
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        height: 40px;
        margin-top: 10px;
        &:focus {
          box-sizing: border-box;

          border-width: 1px;
          border-color: #008489;
        }
      }
    }
  }
  button {
    display: flex;
    &:focus {
      outline: 1px solid;
    }
    .animation {
      padding: 0;
      display: flex;
      margin-top: 10px;
      height: 0;
      & div:nth-child(1) {
        width: 10px;
        height: 10px;
        background-color: #5f3737;
        animation: ${ani} 1s infinite ease-in-out;
        animation-fill-mode: both;

        display: block;
        border-radius: 50%;
      }
      & div:nth-child(2) {
        width: 10px;
        height: 10px;
        background-color: #bea0a0;
        animation: ${ani1} 1s infinite ease-in-out;
        animation-fill-mode: both;
        display: block;
        border-radius: 50%;
      }
      & div:nth-child(3) {
        width: 10px;
        height: 10px;
        background-color: #c23636;
        animation: ${ani3} 1s infinite ease-in-out;
        animation-fill-mode: both;

        display: block;
        border-radius: 50%;
      }
    }
  }
`;
const PersonalNameInput = ({
  personInfoChange,
  name,
  inputFocus,
  ChangeInputBtn,
  loading,

  fix,
  KeyDown,
}) => {
  const nameRef = useRef();
  useEffect(() => {
    if (fix.name) {
      nameRef?.current?.focus();
    }
  }, [fix.name]);

  return (
    <PersonalNameInputStyle>
      <TextStyle>
        허가증이나 여권 등 여행 서류에 기재외더 있는 이름을 말합니다.
      </TextStyle>
      <div className="person-info">
        <div>
          <label htmlFor="">이름</label>
          <input
            value={name}
            ref={nameRef}
            type="text"
            name={'name'}
            onChange={personInfoChange}
            onClick={inputFocus}
            onKeyPress={KeyDown}
          />
        </div>
      </div>
      <Button
        name="name"
        value={name}
        tabIndex="1"
        onClick={ChangeInputBtn}
        save
      >
        {!loading['user/CHANGE_INPUT_USER_NAME_SUBMIT'] && '저장'}
        {loading['user/CHANGE_INPUT_USER_NAME_SUBMIT'] && (
          <div className="animation">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </Button>
    </PersonalNameInputStyle>
  );
};

export default PersonalNameInput;
