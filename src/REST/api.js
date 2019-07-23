import { MAIN_URL } from './config';

export const api = {
  fetchBooks: async () => {
    const response = await fetch(MAIN_URL, {
      method: 'GET',
    });

    if (response.status !== 200) {
      throw new Error('Books were not loaded.');
    }

    const books = await response.json();

    return books;
  },

  createBook: async ({ title, category }) => {
    const response = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ title, category }),
    });

    if (response.status !== 200) {
      throw new Error('Book was not created.');
    }

    const book = await response.json();

    return book;
  },

  removeBook: async (bookId) => {
    const response = await fetch(`${MAIN_URL}/${bookId}`, {
      method: 'DELETE',
    });

    if (response.status !== 204) {
      throw new Error('Book was not removed.');
    }
  },
};
