import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { PokemonDisplay } from './components/PokemonDisplay';
import { InfoMovesPanel } from './components/InfoMovesPanel';
import { TypesList } from './components/TypesList';

const url = "https://pokeapi.co/api/v2/pokemon";

const getPokemonJSON = async (dexNumber) => {
  try {
      const response = await fetch(`${url}/${dexNumber}/`);
      const pokemonJSON = await response.json();
      return pokemonJSON;
  } catch(e) {
      throw e;
  }
}

function App() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async (dexNum) => {
      const newPoke = await getPokemonJSON(dexNum);
      setPokemon(newPoke);
    }

    fetchData(id);
  }, [id])

  return (
    <div className="App">
      <div>
        <PokemonDisplay props={pokemon} />
      </div>
      <div>
        <InfoMovesPanel props={pokemon} />
      </div>
      <div>
        <TypesList props={pokemon} />
      </div>
      <button onClick={() => setId(id - 1)} disabled={id === 1}>{'<'}</button>
      <button onClick={() => setId(id + 1)} disabled={id === 1025}>{'>'}</button>
    </div>
  );
}

export default App;
