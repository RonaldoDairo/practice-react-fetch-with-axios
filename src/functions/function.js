import axios from 'axios'


export const allCharacters = async (state)=>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

