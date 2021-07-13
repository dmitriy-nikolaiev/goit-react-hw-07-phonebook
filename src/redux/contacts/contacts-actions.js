import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

// w/o toolkit

// import types from './contacts-types';

// const addContact = (contact) => ({
//   type: types.ADD,
//   payload: contact,
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (filter) => ({
//   type: types.CHANGE_FILTER,
//   payload: filter,
// });

// export { addContact, deleteContact, changeFilter };
