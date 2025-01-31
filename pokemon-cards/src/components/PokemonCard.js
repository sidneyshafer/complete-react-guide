import styles from "./PokemonCard.module.css";

const colors = {
    fire: '#f94144',
    grass: '#90be6d',
    electric: '#f9c74f',
    water: '#61a5c2',
    ground: '#43aa8b',
    rock: '#577590',
    fairy: '#ff70a6',
    poison: '#4d908e',
    bug: '#f8961e',
    dragon: '#d62828',
    psychic: '#fcbf49',
    flying: '#e2eafc',
    fighting: '#f7b267',
    normal: '#faf0ca',
};

function PokemonCard({ pokemon }) {

    const main_types = Object.keys(colors);

    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const poke_types = pokemon.types.map((type) => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    const color = colors[type];
    
    return (
        <div className={styles.pokemon} style={{backgroundColor: color}}>
            <div className={styles.img}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={`${pokemonName}`} />
            </div>
            <div className={styles.info}>
                <span className={styles.number}>#{id}</span>
                <h3 className={styles.name}>{pokemonName}</h3>
                <small className={styles.type}>Type: <span>{type}</span></small>
            </div>
        </div>
    );
}

export default PokemonCard;