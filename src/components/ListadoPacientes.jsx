import React from 'react'
import Paciente from './Paciente'


function ListadoPacientes({pacientes}) {
  console.log(pacientes)
  return (
    <div className='md:w-1/2 md:h-screen lg:w-3/5 h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administa tus {''}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      {pacientes.map((paciente,index)=>(
      <Paciente
      key={index}
      paciente={paciente}/>
      )
         )}
    </div>
  )
}

export default ListadoPacientes
