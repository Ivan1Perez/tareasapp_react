import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TareaFormulario = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  }

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(nuevaTarea);
  }

  return (
    <form
      className='flex justify-center'
      onSubmit={manejarEnvio}>
      <input
        type='text'
        name='texto'
        placeholder='Escribe una tarea...'
        className='p-2 border-2 border-default-task rounded-s'
        onChange={manejarCambio}
      />
      <input
        type="submit"
        value='Agregar Tarea'
        className=' text-white p-2 bg-default-task cursor-pointer rounded-e' />
    </form>
  )
}

export default TareaFormulario