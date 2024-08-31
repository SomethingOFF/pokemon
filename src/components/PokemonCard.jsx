const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <h4>Moves: {pokemon.moves.length}</h4>
            <div>weight: {pokemon.weight}</div>
        </div>
    )
}

export default PokemonCard