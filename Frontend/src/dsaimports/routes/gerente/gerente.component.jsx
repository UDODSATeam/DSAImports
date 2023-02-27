import React from 'react'
import logo from '../../../assets/logo.svg'


export const Gerente = () => {
    return(
        <div className='flex'>
            <div 
             className={'w-72 h-screen p-5 pt-8 bg-slate-800 text-slate-100'}>
                <div className='flex gap-x-4 items-center'>
                    <img
                    src={logo}
                    className={'cursor-pointer duration-500'}
                    />
                </div>
                <h1 
                className={'text-white origin-left font-medium text-xl duration-300'}>
                    Gerente
                </h1>
                <ul>
                    <li className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Gestionar Clientes</li>
                    <li className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Gestionar Productos</li>
                    <li className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Historial de Ventas</li>
                    <li className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Inventario</li>
                </ul>
            </div>
            <div className='p-7 text-2x1 font-semibold flex-1 h-screen'>
                <h1>Home Page</h1>
            </div>
        </div>
    )
}