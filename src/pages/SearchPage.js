import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from '../components/BooksGrid';
import * as BooksAPI from '../services/BooksAPI';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  /*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */

  useEffect(() => {
    query &&
      BooksAPI.search(query)
        .then(data => data && setResults(data))
        .catch(error => console.log(error));
  }, [query]);

  const handleSearch = event => {
    if (event.target.value !== '') {
      setQuery(event.target.value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onKeyUp={event => handleSearch(event)} autoFocus />
        </div>
      </div>
      <div className="search-books-results">{Array.isArray(results) && <BooksGrid books={results} />}</div>
    </div>
  );
};

export default SearchPage;
