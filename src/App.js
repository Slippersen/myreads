import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import CollectionContext from './contexts/CollectionContext';
import SearchPage from './pages/SearchPage';
import BooksGrid from './components/BooksGrid';
import './App.css';

const App = () => {
  const { collection } = useContext(CollectionContext);

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
                    <BooksGrid books={collection} shelf="currentlyReading" />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BooksGrid books={collection} shelf="wantToRead" />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BooksGrid books={collection} shelf="read" />
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
      <Route path="/search" component={SearchPage} />
    </div>
  );
};

export default App;
