import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Primero = ({nombre, edad}) => {
    //let imprime = "Imprime un texto"

    const [contador, setContador] = useState(0)
    
    console.log(nombre, edad)
  return (
    <>
        <h1>Nombre: {nombre}</h1>
        <h2>Edad: {edad}</h2>
        <h2>Contador: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Click me</button>
    </>
  )
}

Primero.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default Primero