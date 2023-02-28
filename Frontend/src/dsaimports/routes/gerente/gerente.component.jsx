import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'
import { Table } from '../../../components/table/table.component'




const categoriesClientes = ['Nombre', 'Cedula', 'Telefono', 'Dirección']
const categoriesInventario = ['Nombre', 'Categoría', 'Precio', 'Descripcion']

const tableRowsInventario =
[
    {
        name:'Azucar',
        cedula:'Bienes',
        telefono:'28$',
        direccion: 'Producto sucraloso ideal para otorgar dulzor a los postres'
    },
    {   
        name:'Pimenton Rojo',
        cedula:'Vegetales',
        telefono:'30$',
        direccion: 'Es Pimenton!'
    },
    {
        name:'Aguacate',
        cedula:'Fruta',
        telefono:'45$',
        direccion: 'Persea americana, llamado popularmente aguacate, ​​​ palto'
    },
]

const tableRowsClients = [
    {
        id: '1',
        name:'Juansito Teto',
        cedula:'23232223',
        telefono:'0424-012-1213',
        direccion: 'Avenida Intercomunal, Barcelona'
    },
    {   
        id:'2',
        name:'Juansito Teto',
        cedula:'23232223',
        telefono:'0424-012-1213',
        direccion: 'Avenida Intercomunal, Barcelona'
    },
    {
        id:'3',
        name:'Juansito Teto',
        cedula:'23232223',
        telefono:'0424-012-1213',
        direccion: 'Avenida Intercomunal, Barcelona'
    },
]



export const Gerente = () => {
    const [ventana, setVentana] = useState('gestion')
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
                    <li onClick={() => {setVentana('gestion')}} className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Gestionar Clientes</li>
                    <li className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Gestionar Productos</li>
                    <li className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Historial de Ventas</li>
                    <li onClick={() => {setVentana('inventario')}} className='text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'>Inventario</li>
                </ul>
            </div>
            <div className='p-7 text-2x1 font-semibold flex-1 h-screen'>
                <h1>Home Page</h1>
                {
                    ventana == 'gestion'? <Table categories={categoriesClientes} rows={tableRowsClients}></Table> : null
                }
                {
                    ventana == 'inventario'? <Table categories={categoriesInventario} rows={tableRowsInventario}></Table> : null
                }
            </div>
        </div>
    )
}