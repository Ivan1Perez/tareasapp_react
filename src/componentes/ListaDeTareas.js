import React,{ useState } from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea';


const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log('Tarea agregada');
    console.log(tarea);
  }

  return (
    <>
      <TareaFormulario />
      <div>
        {
          tareas.map((tarea) =>
            <Tarea 
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas