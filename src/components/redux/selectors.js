export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filters;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  // Используем другие селекторы
  const contacts = selectContacts(state);
};
