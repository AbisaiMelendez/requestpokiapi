
import axios from 'axios';
import React, {useEffect, useState} from 'react' 

import Card from './Card';
import Navbar from './Navbar';


export default function Display({pokemons}) {
const pokemonsAll=pokemons
const [ pokemones, setPokemones ] = useState([])

const imagesPokemons = () =>{

  setPokemones([])
   pokemonsAll.forEach(element => {
    
      setPokemones(pokemones=>[...pokemones, element.pokemon])
   
  })
}

useEffect(() => {
  imagesPokemons()
}, [pokemonsAll])


  return (
    <div>

      {
        pokemones.map((value,index)=> (
          <Card key={index} thisPokemon={value} />
          
        ))
      }
    </div>

  )
}