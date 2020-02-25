import React from 'react';
import PropTypes from 'prop-types';

const ShelfSelect = ({ bookInCollection }) => {
  return (
    <div className="book-shelf-changer">
      <select value={bookInCollection && bookInCollection.shelf} defaultValue="move">
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfSelect.propTypes = {
  bookInCollection: PropTypes.object,
};

export default ShelfSelect;
