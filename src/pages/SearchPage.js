import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author and hit Enter" onKeyUp={event => handleSearch(event)} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results &&
            results.map(result => (
              <li key={result.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${result.imageLinks && result.imageLinks.smallThumbnail}")`,
                      }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{result.title}</div>
                  <div className="book-authors">{result.authors && result.authors.join(', ')}</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
