import { useSelector, useDispatch } from 'react-redux'
import { getContacts, deleleContact } from 'redux/contactsSlice'; 
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
      
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
    { return contact.name.toLowerCase().includes(filter.toLowerCase().trim()) })

    return (
        <ul style={{ listStyle:"none" }}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} name={name} > {name}{' '}{number}
                <button value={id} style={{ marginLeft: '30px' }} type='button'
                    onClick={(evt) => { dispatch(deleleContact(evt.target.value))}}>delete</button>
            </li>
          ))}
        </ul>
    )
}

export default ContactList;