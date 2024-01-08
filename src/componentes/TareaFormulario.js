import React from 'react'
import { useState } from 'react'

const TareaFormulario = () => {

  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const sendTask = () => {
    return task;
  }

  return (
    <form className='flex justify-center'>
      <input onChange={handleChange} type='text' name='tarea' placeholder='Añade una nueva tarea...' className='p-2 border-2 border-default-task rounded-s' />
      <input onSubmit={sendTask} type="submit" className=' text-white p-2 bg-default-task cursor-pointer rounded-e' />
    </form>
  )
}

export default TareaFormulario