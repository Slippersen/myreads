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
    BooksAPI.update(book, shelf)
      .then(() => {
        let isBookInCollection = collection.filter(bookInCollection => bookInCollection.id === book.id).length > 0;
        if (!isBookInCollection) {
          // Add new book to collection
          let newBook = { ...book };
          newBook.shelf = shelf;
          setCollection(collection.concat([newBook]));
        } else {
          setCollection(
            collection
              .map(bookInCollection => {
                // Change shelf for existing book
                if (bookInCollection.id === book.id) {
                  bookInCollection.shelf = shelf;
                }
                return bookInCollection;
              })
              // Remove books that have 'none' shelf
              .filter(bookInCollection => bookInCollection.shelf !== 'none')
          );
        }
      })
      .catch(error => console.log(error));
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
