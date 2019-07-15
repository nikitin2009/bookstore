export const books = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category
        }
      ];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}