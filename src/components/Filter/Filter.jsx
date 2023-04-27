import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filtered = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <p>Filter contact by Name</p>
        <input
          type="text"
          onChange={event => dispatch(setFilter(event.target.value))}
        />
      </label>
    </div>
  );
};
