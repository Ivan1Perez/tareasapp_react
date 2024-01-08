import React from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'


const ListaDeTareas = () => {
  return (
    <div>
      <TareaFormulario />
      <Tarea texto='Aprender react' />
    </div>
  )
}

export default ListaDeTareas