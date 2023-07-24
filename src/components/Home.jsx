import React, { useEffect, useState } from 'react'
import { allInformation } from '../functions/functions'
import Navbar from './reusables/Navbar';
import Slider from './Slider';

const Home = () => {

  const [information, setInformation] = useState(null);

  useEffect(() => {
    allInformation(setInformation)
    // console.log(information)
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      {/* {information != null ? (

        information.map(
          info => (
            <div key={info.id}>
              <a href={`/information/${info.id}`}>{info.name}</a>
              <img src={info.image} alt="" />
            </div>
          )
        )

      ) : ('No hay info')} */}
    </>
  )
}

export default Home