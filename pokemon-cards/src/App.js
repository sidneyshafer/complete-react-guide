import { useState, useEffect, useCallback } from "react";
import PokemonList from "./components/PokemonList";

const POKEMON_COUNT = 24;

function App() {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonCardsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const fetchedPokemon = [];

    try {
      for (let i = 1; i <= POKEMON_COUNT; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

        if (!response.ok) {
          throw new Error(response.status + ' : Something went wrong...');
        }

        const data = await response.json();
        fetchedPokemon.push(data);
      }
      // console.log(fetchedPokemon);
      setPokemonCards(fetchedPokemon);

    } catch (error) {
      setError(error.message);
    }
    
    setIsLoading(false);

  }, []);

  useEffect(() => {
    fetchPokemonCardsHandler();
  }, [fetchPokemonCardsHandler]);

  let content = <p>No Pokemon cards found.</p>

  if (pokemonCards.length > 0) {
    content = <PokemonList list={pokemonCards} />;
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading pokemon...</p>
  }

  return (
    <div className="app">
      <h1>Pokemon Cards</h1>
      {content}
    </div>
  );
}

export default App;
