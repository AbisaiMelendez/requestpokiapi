import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Card({ thisPokemon }) {
    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: { front_default: "#" },
        species: { name: "" },
        stats: { name: "" }
    })
    const getPokemon = (url) => {
        // console.log(url)
        axios.get(url)
            .then((response) => {
                //console.log(response.data)
                setOnePokemon(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        if (thisPokemon.url !== "") {
            getPokemon(thisPokemon.url)
        }
    }, [setOnePokemon])

    return (
        
        //aca llamo el nombre y la imagen
        <div className="pokemon-card" id=''>
            <div className="" >
                <p className='id-card card-zize'>Nº{` 0` + onePokemon.id}</p>
                <h1 className='titulo'>{onePokemon.name}</h1>
                <img src={onePokemon.sprites.front_default} className="pokemon-img" />
                <p className="">back default:</p>

                <img src={onePokemon.sprites.back_default} className="pokemon-img1" />
                <p>Height:{onePokemon.height}</p>
                <p>base experience: {onePokemon.base_experience}</p>
                <div className='target-specie'>
                
                    <p>tipo:</p>
                    {/*<p>{onePokemon.types[0].type.name}</p>*/}
                    <div>
                        {onePokemon.types.map((value,index)=>(

                            <p key={index}>{value.type.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}