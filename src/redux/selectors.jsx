import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.list;
export const selectFilter = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {    

    const filteredContacts = contacts.filter(contact =>
        { return contact.name.toLowerCase().includes(filter.toLowerCase().trim()) })

    return filteredContacts;
    }
)