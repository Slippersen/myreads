import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BooksGrid from './components/BooksGrid';
import * as BooksAPI from './services/BooksAPI';
import './App.css';

const App = () => {
  const [myCollection, setMyCollection] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => data && setMyCollection(data))
      .catch(error => console.log(error));
  }, []);

  const updateMyCollection = data => {
    // TODO: update API
    setMyCollection(data);
  };

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BooksGrid books={myCollection} myCollection={myCollection} shelf="currentlyReading" />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BooksGrid books={myCollection} myCollection={myCollection} shelf="wantToRead" />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BooksGrid books={myCollection} myCollection={myCollection} shelf="read" />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}
      />
      <Route path="/search" render={() => <SearchPage myCollection={myCollection} updateMyCollection={updateMyCollection} />} />
    </div>
  );
};

export default App;
