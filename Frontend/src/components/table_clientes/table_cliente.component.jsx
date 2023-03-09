import React, { useState, useEffect } from 'react'
import buyer from '../../assets/template_buyer.svg'
import { ModalCliente } from '../modal_cliente/modalCliente.component'


export const TableCliente = ({categories, rows}) =>{

    const [searchBar, setSearchBar] =useState('')
    const [users, setUsers] = useState(rows)
    const [filteredUsers, setFilteredUsers] = useState([])


    useEffect(() =>{
        setFilteredUsers(users.filter(users =>
          users.name.toLowerCase().includes(searchBar.toLowerCase())
        ))
      },[searchBar, users])

    return(
        <div className="container mx-auto mt-20 ">
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="flex  justify-between py-3 pl-2">
                        
                                

                                <div className='w-2/3 space-x-4'>
                                    <button className='py-2 w-1/6  bg-slate-300 rounded-l-lg rounded-r-lg'><i className="fa-solid fa-filter"></i> Filtrar </button>
                                    <ModalCliente className='py-2 w-1/5 bg-blue-600 rounded-l-lg rounded-r-lg text-white' buttonContent={"+ Añadir Cliente"}/>
                                </div>
                                

                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="w-1/4 px-2 mx-2 block text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Search..."
                                    onChange={(event) => setSearchBar(event.target.value)}
                                />  
                                  
                    </div>

                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="sr-only"
                                                >
                                                    Checkbox
                                                </label>
                                            </div>
                                        </th>
                                        {categories.map((element) => { return(
                                            <th
                                                scope="col"
                                                key={element}
                                                className="font-roboto px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                {element}
                                            </th>
                                        )})}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            {/* aca tengo una duda, si comento estos dos ultimos headers no se coloca en gris, que es lo que segmenta esto aca? */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredUsers.map((element) => {
                                        return (
                                            <tr key={element.cedula} className='bg-white'>
                                                <td className="py-3 pl-4">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            type="checkbox"
                                                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                                        />
                                                        <label
                                                            htmlFor="checkbox"
                                                            className="sr-only"
                                                        >
                                                            Checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="flex gap-4 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    <div className='w-16'>
                                                        <img src={buyer} alt="profile_photo" className='rounded-full'/>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className='text-bold'>{element.name}</span>
                                                        <span className='text-gray-500'>{element.email}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {element.cedula}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {element.telefono}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {element.direccion}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a
                                                        className="text-slate-500 hover:text-green-500"
                                                        href="#"
                                                    >
                                                    <i className="fa-solid fa-pen"></i>
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a
                                                        className="text-slate-500 hover:text-red-500"
                                                        href="#"
                                                    >
                                                    <i className="fa-regular fa-trash-can"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}