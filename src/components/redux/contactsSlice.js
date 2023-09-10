import { createSlice, nanoid } from '@reduxjs/toolkit';
// Импортируем операции
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  // Слайс списка задач, для хранения массива Контактов, флаг статуса загрузки и данные возможной ошибки.
  initialState: {
    // id: nanoid(),
    items: [],
    isLoading: false,
    error: null,
  },

  //   Обработка-внешних-екшенов

  //   Свойство extraReducers используется чтобы объявить редюсеры для «внешних» типов экшенов, то есть тех которые не сгенерированы из свойства reducers
  extraReducers: {
    // Выполнится в момент старта HTTP-запроса
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    // Выполнится если HTTP-запрос завершился с ошибкой
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    // Выполнится если HTTP-запрос завершился успешно
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Добавление контакта
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    // Обработка экшенов удаления Контакта
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

// Экспортируем редюсер
export const contactsReducer = contactsSlice.reducer;
