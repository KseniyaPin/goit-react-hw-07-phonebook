import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  // Удаления задачи при клике по кнопке удаления, и передаем ей идентификатор
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div key={contact.id} id={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
