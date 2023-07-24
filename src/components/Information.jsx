import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { elementInformation } from '../functions/functions';

const Information = () => {

  const [element, setElement] = useState(null);

  useEffect(() => {
    elementInformation(params.id, setElement)
    console.log(element)
  }, [])

  const params = useParams();

  return (
    <>
      {
        element != null ? (
          <div>
            <h2>Informacion con el id {params.id}</h2>
            <p>Con el nombre {element.name}</p>
            <img src={element.image} alt="" />
          </div>
        ) : ('No hay informacion del elemento')
      }
    </>
  )
}

export default Information