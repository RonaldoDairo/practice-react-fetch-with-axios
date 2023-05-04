import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { oneCharacter } from '../functions/function'

const Character = () => {
  const [character , setCharacter ] = useState(null) 
  const params = useParams()
  useEffect(() => {
    oneCharacter(params.id, setCharacter)
  }, []);
  return (
    <>{character != null ? (
      <div>
      <h2>character with id {params.id}</h2>
      <p>con el nombre {character.name}</p>
      <img src={character.image} alt='im'></img>
      </div>
    ) :('no hay personaje')}
     
    </>
  )
}

export default Character
