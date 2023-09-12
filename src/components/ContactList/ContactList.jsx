import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from '../redux/selectors';
import { fetchContacts, deleteContact } from '../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  // const visibleContacts = selectVisibleContacts(contacts);
  
  // function selectVisibleContacts(contacts) {
  //   return contacts.length > 0
  //     ? contacts.filter(contact => {
  //         return contact.name.toLowerCase().includes(filter.toLowerCase());
  //       })
  //     : [];
  // }

  // Удаления задачи при клике по кнопке удаления, и передаем ей идентификатор
  const handleDelete = evt => dispatch(deleteContact(evt.currentTarget.id));

  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id} id={id} onClick={handleDelete}>
              {name}: {number}
              <button type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
// };
