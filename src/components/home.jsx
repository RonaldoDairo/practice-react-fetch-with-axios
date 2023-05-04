import React, { useEffect, useState } from 'react'
import { allCharacters } from '../functions/function'
const Home = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    allCharacters(setCharacter)
  }, []);

  return (
    <>
      {character != null ? (
        character.map(character=>(
        <div key={character.id}>
          <a href=''>{character.name}</a>
        </div>
      ))
      ): ('no hay personajes')}
    </>
  )
}

export default Home
