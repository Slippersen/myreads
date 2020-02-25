import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CollectionContext from '../contexts/CollectionContext';
import ShelfSelect from './ShelfSelect';

const BooksGrid = ({ books, shelf }) => {
  const { collection, updateCollection } = useContext(CollectionContext);

  return (
    <ol className="books-grid">
      {books &&
        Array.isArray(books) &&
        books.map(
          book =>
            book.shelf === shelf && (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks && book.imageLinks.smallThumbnail}")`,
                      }}></div>
                    <ShelfSelect book={book} bookInCollection={collection.filter(myBook => myBook.id === book.id)[0]} shelf={shelf || null} updateCollection={updateCollection} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                </div>
              </li>
            )
        )}
    </ol>
  );
};

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string,
};

export default BooksGrid;
