import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from './redux/selectors';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Form/Form.module.css';

export default function App() {
  const dispatch = useDispatch();
  // Получаем части состояния
  const { items } = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Рендерим разметку в зависимости от значений в состоянии
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <section className={css.sectionStyle}>
        <Filter />
        {isLoading && !error && <b>Loading contacts...</b>}
        <ContactList />
      </section>
    </div>
  );
}
