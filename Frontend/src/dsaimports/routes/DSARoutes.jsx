import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Gerente } from './gerente/gerente.component'
export const DSARoutes = () => {
  return (
    <Routes>
        <Route path='/dsaimports/gerente' element={<Gerente/>} />


        {/* TODO: Colocar las rutas separadas para cada tipo de vista (Admin, Gerente, Cobrador, etc etc) */}
        {/* TODO: Simular la separación de las rutas de acuerdo al tipo de usuario. */}

        {/* <Route path='/dsaimports/admin'/> */}
    </Routes>
  )
}
