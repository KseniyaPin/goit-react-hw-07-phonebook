import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { selectVisibleContacts } from '../redux/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

// return (
//   <>
//     <ul>
//       {contacts.map(({ name, number, id }) => {
//         return (
//           <li key={id} id={id}>
//             {name}: {number}
//             <button type="button" onClick={handleDelete}>
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   </>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
// };
