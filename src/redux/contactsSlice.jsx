import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const initialState = {
  list: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
      addContact: (state, action) => {
        const exists = state.list.find(contact => contact.name === action.payload.name);
          if (exists) {
            return alert('contact is already saved')
        }
        state.list.push(action.payload)
      },
      deleleContact: (state, action) => {
          state.list = state.list
              .filter(contact => contact.id !== action.payload)
      }
  },
})
export const { addContact, deleleContact } = contactsSlice.actions

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['list'] 
}
export const ContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)