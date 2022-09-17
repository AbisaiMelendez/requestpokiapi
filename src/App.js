

import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Searchbar from './components/Searcbar';
import Card from './components/Card';
import { Link } from "react-router-dom";




// Acá me extraigo los datos
function App() {

  const [pokemon, setPokemon] = useState([
  ])

  const [onePokemon, setOnePokemon] = useState({
    name: "",
    img: "#",
    id: "0",
    sprites: { front_default: "#" },
    species: { name: "" },
  })

  const [info, setInfo] = useState("")
  const [pokemonAll, setPokemonAll] = useState([])

  const getPokemons = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        setPokemonAll(response.data.results)
      })
      .catch((err) => { console.log(err) })
  }

  const handleSetSearch = e => {
    setPokemon(e.target.value);
  }

  // Busqueda de un pokemon 

  const searchOne = async (e) => {
    setInfo('')
    e.preventDefault()
    //console.log(pokemon)
    if (pokemon !== '') {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
          // console.log(response.data)
          response.data.url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          response.data.img = response.data.sprites.front_default
          setOnePokemon(response.data)
        })
        .catch(error => {
          console.log(error)
          //setPokemon({one:false})
          setInfo(`ingresa un pokemon`)
        })
    }
  }

  useEffect(() => {
    getPokemons();
  }, [setPokemonAll])


  return (
    <div>
      <Navbar />

      <div className="App">
      
        <div>
          <div className="searchbar-container">
            <div className="searchbar">
              <input placeholder="Buscar pokemon..."
                onChange={handleSetSearch}
                value={pokemon}
              />
    
            </div>

            <div className="searchbar-btn">
              <button onClick={searchOne}>Buscar</button>
            </div>
            <div className="searchbar-btn">
              <Link
              to="/filter"
              className="btn btn-warning"
              > Filtro </Link>
            </div>

          </div>
          <p className="info">{info}</p>
        </div>

        <div className="display">
          <div className="">

          </div>
          <div className="item">resultado de busqueda</div>
          <Card key={onePokemon.id} thisPokemon={onePokemon} />
          {
            pokemonAll.map(value => (
              //console.log(value),
              <Card key={value.id} thisPokemon={value} />
            ))
          }

        </div>
      </div>
    </div>
  );
}


export default App;
