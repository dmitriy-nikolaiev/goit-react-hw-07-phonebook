import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as actions from './contacts-actions';

let initialState = [];

try {
  const savedState = JSON.parse(localStorage.getItem('contacts'));
  if (savedState) initialState = savedState;
} catch (error) {
  console.error(error);
}

const items = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// w/o toolkit

// import { combineReducers } from 'redux';
// import types from './contacts-types';

// let initialState = [];

// const initState = () => {
//   try {
//     const savedState = JSON.parse(localStorage.getItem('contacts'));
//     if (savedState) initialState = savedState;
//   } catch (error) {}
// };

// initState();

// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
