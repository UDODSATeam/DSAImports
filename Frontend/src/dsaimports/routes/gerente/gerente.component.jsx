import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'
import { TableCliente } from '../../../components/table_clientes/table_cliente.component'
import { TableInventario } from '../../../components/table_inventario/table_inventario.component'
import { ModalProducto } from '../../../components/modal_producto/modalProducto.component'
import { ModalDelete } from '../../../components/modal_delete/modal_delete.component'
import { TableVentas } from '../../../components/table_ventas/table_ventas.component'

const categoriesClientes = ['Nombre', 'Cedula', 'Telefono', 'Dirección']
const categoriesInventario = ['Nombre', 'Categoría', 'Precio', 'Descripcion', 'Cantidad', 'Presentación']
const categoriesHistorial = ['ID Venta', 'Monto Total', 'Fecha Canc.', 'Código Cliente', 'Código Nota entrega']


const tableRowsVentas = [
    {
        id: '1',
        montoTotal:'1920$',
        fechaCancelacion:'03-09-2023',
        cod_cliente: '1',
        cod_notaEntrega:'20'
    
    },
    {
        id: '2',
        montoTotal:'2000$',
        fechaCancelacion:'03-08-2023',
        cod_cliente: '2',
        cod_notaEntrega:'52'
    
    },
    {
        id: '3',
        montoTotal:'1500$',
        fechaCancelacion:'03-01-2023',
        cod_cliente: '3',
        cod_notaEntrega:'10'
    
    },
]


const tableRowsInventario =
[
    {
        name:'Azucar',
        categoria:'Bienes',
        precio:'28$',
        descripcion: 'Producto sucraloso ideal para otorgar dulzor a los postres',
        cantidad:'10',
        presentacion:'1 Kg.'
    },
    {   
        name:'Pimenton Rojo',
        categoria:'Vegetales',
        precio:'30$',
        descripcion: 'Es Pimenton!',
        cantidad:'10',
        presentacion:'25 Kg.'
    },
    {
        name:'Aguacate',
        categoria:'Fruta',
        precio:'45$',
        descripcion: 'Persea americana, llamado popularmente aguacate, ​​​ palto',
        cantidad:'10',
        presentacion:'25 Kg.'
    },
]

const tableRowsClients = [
    {
        id: '1',
        name:'Juansito Teto',
        email:'example@gmail.com',
        cedula:'21232223',
        telefono:'0424-012-1213',
        direccion: 'Avenida Intercomunal, Barcelona'
    },
    {   
        id:'2',
        name:'Harrier DuBois',
        email:'example@gmail.com',
        cedula:'23232423',
        telefono:'0424-012-1213',
        direccion: 'Avenida Intercomunal, Barcelona'
    },
    {
        id:'3',
        name:'Juana Maria',
        email:'example@gmail.com',
        cedula:'23262223',
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
                className={'text-white py-6 font-baloo origin-left font-medium text-5xl duration-300'}>
                    Gerente
                </h1>
                <ul>
                    <li onClick={() => {setVentana('gestion')}} className='text-sm flex items-center gap-x-4 gap-y-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'><i className="fa-solid fa-users"></i>Gestionar Clientes</li>
                    <li onClick={() => {setVentana('gestionProducto')}} className='text-sm flex items-center gap-x-4 gap-y-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'><i className="fa-solid fa-table"></i>Gestionar Productos</li>
                    <li onClick={() => {setVentana('historial')}} className='text-sm flex items-center gap-x-4 gap-y-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'><i className="fa-solid fa-clock-rotate-left"></i>Historial de Ventas</li>
                    <li onClick={() => {setVentana('inventario')}} className='text-sm flex items-center gap-x-4 gap-y-4 cursor-pointer p-2 hover:bg-slate-600 rounded-md'><i className="fa-solid fa-boxes-stacked"></i>Inventario</li>
                </ul>
            </div>
            <div className='text-2x1 font-semibold flex-1 h-screen w-full bg-gray-100'>
                <div className='pt-8 text-center bg-white'>
                    <h1 className='pb-4 text-6xl font-baloo text-center border-b-2 border-b-slate-600'>Bienvenido</h1>    
                </div>
                {
                    ventana == 'gestion'? <TableCliente categories={categoriesClientes} rows={tableRowsClients}></TableCliente> : null
                }
                {
                    ventana == 'inventario'? <TableInventario categories={categoriesInventario} rows={tableRowsInventario}></TableInventario> : null
                }
                {
                    ventana == 'historial'? <TableVentas categories={categoriesHistorial} rows={tableRowsVentas}></TableVentas>: null 
                }
                {
                    ventana == 'gestionProducto'?<div className='flex flex-row justify-between'> <ModalProducto buttonContent={'Añadir Producto'}/> <ModalDelete buttonContent={'Eliminar Producto'}/> </div> : null
                }
            </div>
        </div>
    )
}