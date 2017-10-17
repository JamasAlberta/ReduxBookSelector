
export function selectBook(book) {
  // selectBook is an ActionCreator, needs to return action
  // object with type property - type and payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };

}