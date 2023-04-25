import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
    
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Find contacts by name</h3>
            <input
              type="text"
              name="filter"
              onChange = {(evt) => {dispatch(filterContacts(evt.target.value))} }
              id='filterInput' required />
        </div> 
    )
}

export default Filter