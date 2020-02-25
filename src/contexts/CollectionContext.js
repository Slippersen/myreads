import React, { useState, useEffect } from 'react';
import * as BooksAPI from '../services/BooksAPI';

const CollectionContext = React.createContext(null);

export const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => data && setCollection(data))
      .catch(error => console.log(error));
  }, []);

  const updateCollection = (book, shelf) => {
    setCollection(
      collection.map(bookInCollection => {
        if (bookInCollection.id === book.id) {
          bookInCollection.shelf = shelf;
        }
        return bookInCollection;
      })
    );
    BooksAPI.update(book, shelf).catch(error => console.log(error));
  };

  return (
    <CollectionContext.Provider
      value={{
        collection,
        updateCollection,
      }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContext;
