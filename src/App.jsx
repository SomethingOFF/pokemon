import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import axios from "axios";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        const fetches = response.data.results.map(pokemon => axios.get(pokemon.url));
        Promise.all(fetches).then(pokemonResponses => {
          setPokemonData(pokemonResponses.map(res => res.data));
        });
      });
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return <div className="container">
    <div className="app">
      <h1>Pokémon Search</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="pokemon-container">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  </div>;
}

export default App;
