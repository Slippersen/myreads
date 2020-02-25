import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CollectionContext from '../contexts/CollectionContext';

const ShelfSelect = ({ book, bookInCollection, shelf }) => {
  const { updateCollection } = useContext(CollectionContext);

  return (
    ((shelf && bookInCollection.shelf === shelf) || !shelf) && (
      <div className="book-shelf-changer">
        <select value={(bookInCollection && bookInCollection.shelf) || 'none'} onChange={event => updateCollection(book, event.target.value)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  );
};

ShelfSelect.propTypes = {
  book: PropTypes.object.isRequired,
  bookInCollection: PropTypes.object,
  shelf: PropTypes.string,
};

export default ShelfSelect;
