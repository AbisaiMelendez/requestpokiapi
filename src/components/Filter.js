import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from './Display';
import Navbar from './Navbar';

const Filter = () => {

    const [tipos, setTipos] = useState([])
    const [pokemons, setPokemons] = useState([])

    const getTipos = async () => {
        await axios.get('https://pokeapi.co/api/v2/type')

            .then(response => {

                setTipos(response.data.results)
                //console.log(response)
            })
    }

    const filtrarPokemon = async (e) => {
        setPokemons([])
        await axios.get(e.target.value)
            .then(response => {
                setPokemons(response.data.pokemon)
            })
    }
    useEffect(() => {
        getTipos()
    }, [])



    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='mt-3 offset-3 col-6' >
            <select className='form-control' onChange={filtrarPokemon}>
                {
                    tipos.map((element, index) => (
                        <option key={index} value={element.url}> {element.name}</option>
                    ))
                }
            </select>


            </div>

            <div>

                <Display pokemons={pokemons} />
            </div>
        </div>
    )
}

export default Filter