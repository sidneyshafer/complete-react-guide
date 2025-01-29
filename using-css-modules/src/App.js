import Header from './components/Header';
import Books from './components/Books';

const books = [
  {
    title: 'To Kill a Mockingbird',
    description:
      'A classic coming-of-age story set in the American South during the Jim Crow era, exploring themes of racism and justice through the eyes of a young girl named Scout Finch as her lawyer father defends a wrongly accused Black man.'
  },
  {
    title: 'The Great Gatsby',
    description:
      'A novel set in the Jazz Age, following the mysterious millionaire Jay Gatsby as he attempts to rekindle a past love with Daisy Buchanan, highlighting themes of wealth, class, and the American Dream.'
  },
  {
    title: '1984',
    description:
      'A dystopian novel depicting a totalitarian government that controls every aspect of citizens\' lives through surveillance and propaganda, exploring themes of freedom, censorship, and individual resistance.'
  },
];

function App() {
  return (
    <div>
      <Header />
      <ul id='books'>
        <Books items={books} />
      </ul>
    </div>
  );
}

export default App;
