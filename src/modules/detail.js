import { createAction, handleActions } from 'redux-actions';

// Action Type
const SEARCH_TO_DETAIL = 'detail/SEARCH_TO_DETAIL';
const DATE_CHANGE_DETAIL = 'detail/DATE_CHANGE_DETAIL';
const GUEST_CHANGE_DETAIL = 'detail/GUEST_CHANGE_DETAIL';
const ROOM_ID_DETAIL = 'detail/ROOM_ID_DETAIL';

const CLEAR_GUEST_DETAIL = 'detail/CLEAR_GUEST_DETAIL';
const CLEAR_CHECKDATE_DETAIL = 'detail/CLEAR_CHECKDATE_DETAIL';

// Action Creator
export const searchToDetail = createAction(
  SEARCH_TO_DETAIL,
  ({ roomId, startDate, endDate, numOfAdult, numOfKid, numOfInfant }) => ({
    roomId,
    startDate,
    endDate,
    numOfAdult,
    numOfKid,
    numOfInfant,
  }),
);

export const dateChangeDetail = createAction(
  DATE_CHANGE_DETAIL,
  (input, date) => ({ input, date }),
);
export const guestChangeDetail = createAction(
  GUEST_CHANGE_DETAIL,
  (input, guest) => ({ input, guest }),
);

export const roomIdDetail = createAction(ROOM_ID_DETAIL, (id) => id);

export const clearGuestDetail = createAction(CLEAR_GUEST_DETAIL);

export const clearCheckDateDtail = createAction(CLEAR_CHECKDATE_DETAIL);

// initial state
const initialStates = {
  roomId: '',
  startDate: '',
  endDate: '',
  numOfAdult: 0,
  numOfKid: 0,
  numOfInfant: 0,
};

// reducer
const detail = handleActions(
  {
    [SEARCH_TO_DETAIL]: (state, { payload }) => ({ ...state, ...payload }),
    [DATE_CHANGE_DETAIL]: (state, { payload: { input, date } }) => ({
      ...state,
      [input]: date,
    }),
    [GUEST_CHANGE_DETAIL]: (state, { payload: { input, guest } }) => ({
      ...state,
      [input]: guest,
    }),
    [ROOM_ID_DETAIL]: (state, { payload: id }) => ({ ...state, rommId: id }),
    [CLEAR_GUEST_DETAIL]: (state, _) => ({
      ...state,
      numOfAdult: 0,
      numOfKid: 0,
      numOfInfant: 0,
    }),
    [CLEAR_CHECKDATE_DETAIL]: (state, _) => ({
      ...state,
      startDate: '',
      endDate: '',
    }),
  },
  initialStates,
);

export default detail;
