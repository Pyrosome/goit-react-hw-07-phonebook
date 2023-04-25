import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';


const ContactForm = () => {
     
    const dispatch = useDispatch();
    const handleSubmit = evt => {
        evt.preventDefault();
        const name = evt.target.name.value;
        const number = evt.target.number.value;

        const newContact = {
            id: nanoid(),
            name,
            number
        }

        dispatch(addContact(newContact))
        
        evt.target.reset()
    }

    return (
        <form 
          onSubmit={handleSubmit}
        >
          <label htmlFor='nameInput'><h3>Name</h3>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id='nameInput' required />
          </label> 
          <label htmlFor='numberInput'><h3>Number</h3>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id='nameInput' required />
          </label>
          <br /><br />
            <button style={{ fontSize: '20px' }} type='submit'>
                Add contact
            </button>
        </form>
    )
}

export default ContactForm