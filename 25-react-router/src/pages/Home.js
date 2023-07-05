import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to the list of <Link to='/products'>products</Link>.
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default HomePage;
