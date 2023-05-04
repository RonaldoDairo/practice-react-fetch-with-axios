import React, { useEffect, useState } from 'react'
import { allCharacters } from '../functions/function'
const Home = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters)
    

  }, []);

  return (
    <>
      {characters != null ? (
        characters.map(character=>(
         // character.id === 1 && para obtener solo un id en concreto
        <div key={character.id}>
          
          <a href={`/character/${character.id}`}>{character.name}</a>
          
        </div>
      ))
      ): ('no hay personajes')}
    </>
  )
}

export default Home
