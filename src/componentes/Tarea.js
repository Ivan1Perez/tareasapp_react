import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Tarea = ({id, texto, completada, completarTarea, eliminarTarea}) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <span onClick={() => completarTarea(id)}>
        {texto}
        </span>
      <span onClick={() => eliminarTarea(id)}>
        <FaDeleteLeft />
        </span>
    </div>
  )
}

export default Tarea