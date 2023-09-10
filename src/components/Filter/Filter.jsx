import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { filterContacts } from 'components/redux/filterSlice';
import { selectFilter } from 'components/redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = filter => dispatch(filterContacts(filter));

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(handleFilterChange(evt.currentTarget.value))}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
