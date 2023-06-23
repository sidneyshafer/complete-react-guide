import UserFinder from './components/UserFinder';
import UsersContext from './context/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Sidney' },
  { id: 'u2', name: 'Allie' },
  { id: 'u3', name: 'Lisa' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
