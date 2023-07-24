import axios from "axios";

// Generar varias funciones que hagan las peticiones a la API y luego desde los componentes llamar a las funciones

const allInformation = async (state) => {

    const request = await axios.get('https://rickandmortyapi.com/api/character')
    state(request.data.results)
}

const elementInformation = async (id, state) => {
    
    const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    console.log(request.data);
    state(request.data);
}

export {
    allInformation, 
    elementInformation,
}