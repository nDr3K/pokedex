import {useState} from "react";
import axios from "axios";
import Stats from "./components/Stats";
import Button from "./components/Button";
import Types from "./components/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonId, setPokemonId] = useState("");
  const prevIcon = <FontAwesomeIcon icon={faAnglesLeft} />
  const nextIcon = <FontAwesomeIcon icon={faAnglesRight} />

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types);
      setPokemonId(res.data.id);
      setPokemonData(toArray);
    } catch (error) {
      
    }
  }

  const prevPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)-1}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types);
      setPokemonId(res.data.id);
      setPokemonData(toArray);
    } catch (error) {
      
    }
  }

  const nextPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)+1}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types);
      setPokemonId(res.data.id);
      setPokemonData(toArray);
    } catch (error) {
      
    }
  }


  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text" 
            onChange={handleChange} 
            placeholder="Enter a Pokemon name"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return(
          <div className="container" key={pokemonId}>
            <img src={data.sprites["front_default"]} alt={pokemon}/>
            <div className="table">
              <div className="buttons">
                <Button action={prevPokemon} actionIcon={prevIcon}/>
                <div className="title">{data.name}</div>
                <Types types={pokemonType}/>
                <Button action={nextPokemon} actionIcon={nextIcon}/>
              </div>
              <div className="tableBody">
                <Stats stats={data.stats}/>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
