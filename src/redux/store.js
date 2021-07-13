import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

const saveState = (state) => {
  try {
    localStorage.setItem('contacts', JSON.stringify(state.contacts.items));
  } catch (error) {}
};

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

// w/o toolkit

// import { createStore, combineReducers } from 'redux';

// import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const saveState = (state) => {
//   console.log(state, 'Save state');
//   try {
//     localStorage.setItem('contacts', JSON.stringify(state.contacts.items));
//   } catch (error) {}
// };

// // const loadState = () => {
// //   try {
// //     const savedState = JSON.parse(localStorage.getItem('contacts'));
// //     if (savedState) return savedState;
// //   } catch (error) {}
// //   return undefined;
// // };

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;
