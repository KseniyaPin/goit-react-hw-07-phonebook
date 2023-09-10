import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/operations';
import css from './Form.module.css';

export const Form = () => {
  // const contacts = useSelector(state => state.contacts);

  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  // Запуск операции добавления Контакта при сабмите формы
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addContact(evt.target.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters. For example Adrian de Castelmore"
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
