import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { PokemonDisplay } from './components/PokemonDisplay';
import { InfoMovesPanel } from './components/InfoMovesPanel';
import { TypesList } from './components/TypesList';
import leftArrow from './leftarrow.png';

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
      <h1 className="text-[64px] font-bold mt-[35px]">Exercise 5 - PokeDex!</h1>
      <div className="flex flex-row mt-[53px]">
        <div className="flex flex-col w-[463px] ml-[129px] mr-[246px]">
          <PokemonDisplay props={pokemon} />
          <TypesList props={pokemon} />
          <div className="flex items-center justify-center gap-[43px]">
            <button 
              onClick={() => setId(id - 1)} 
              disabled={id === 1}
              className="flex items-center justify-center w-[173px] h-[69px] bg-[#E8E8E8] rounded-[10px]"
            >
              <img src={leftArrow} className="button-icon w-[61px] h-[61px]" />
            </button>
            <button 
              onClick={() => setId(id + 1)} 
              disabled={id === 1025}
              className="flex items-center justify-center w-[173px] h-[69px] bg-[#E8E8E8] rounded-[10px]"
            >
              <img src={leftArrow} className="button-icon rotate-180 w-[61px] h-[61px]" />
            </button>
          </div>
        </div>
        <InfoMovesPanel props={pokemon} />
      </div>
    </div>
  );
}

export default App;
