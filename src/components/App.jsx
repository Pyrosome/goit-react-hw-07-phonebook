import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  
  return (
    <div style={{margin: '10px'}}>
       
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2 style={{ margin: '0px', marginTop: '50px' }}>Contacts</h2>
      <Filter/>
      <ContactList/>

    </div>
  );
};
