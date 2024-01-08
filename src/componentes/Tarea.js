import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Tarea = ({texto}) => {
  return (
    <div className='bg-default-task my-2 rounded text-white px-4 py-2 flex justify-between items-center'>
      <span>{texto}</span>
      <span><FaDeleteLeft /></span>
    </div>
  )
}

export default Tarea