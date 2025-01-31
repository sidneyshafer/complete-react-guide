import PokemonCard from "./PokemonCard";
import styles from "./PokemonList.module.css";

function PokemonList({ list }) {
    return (
        <div className={styles.container}>
            {list.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonList;