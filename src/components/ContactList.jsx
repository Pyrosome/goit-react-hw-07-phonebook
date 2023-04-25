import { useDispatch, useSelector } from 'react-redux'
import { deleleContact } from 'redux/contactsSlice'; 
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
  
    return (
        <ul style={{ listStyle:"none" }}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} name={name} > {name}{' '}{number}
                <button value={id} style={{ marginLeft: '30px' }} type='button'
                    onClick={(evt) => { dispatch(deleleContact(evt.target.value))}}>delete</button>
            </li>
          ))}
        </ul>
    )
}

export default ContactList;