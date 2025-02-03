import useFetchBook from './hooks/useFetchBook';
import BookList from './components/BookList';
import QueryInput from './components/QueryInput';

function App() {
  const { bookData, error, isLoading, fetchBookData } = useFetchBook();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Book Finder</h1>
      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <QueryInput onSubmit={fetchBookData} />
        <small style={{ marginTop: '10px' }}>Search by author, book title, ISBN, etc.</small>
      </div>
      {isLoading ? <p className='loading'>Loading your book data...</p> : 
        <BookList 
        bookData={bookData} 
        error={error}
        />}
    </div>
  );
}

export default App;
