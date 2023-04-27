import { selectFilteredContacts } from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} style={{display: 'flex', gap: '15px', height: '30px'}}>
            <p>{name} {':'} {number}</p>
            <button style={{height: '20px', marginTop: '15px'}} type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
