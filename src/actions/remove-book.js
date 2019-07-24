const removeBookFromList = id => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

export const removeBook = (api, dispatch) => (id) => {
  api.removeBook(id)
    .then(() => {
      dispatch(removeBookFromList(id));
    })
    .catch(err => alert(`Error: ${err}`));
};
