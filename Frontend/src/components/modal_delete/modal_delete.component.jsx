import React, { useState } from "react";

export const ModalDelete= ({buttonContent}) => {
  const [showModal, setShowModal] = useState(false);
  const [ID, setID] = useState('');


  // name:'Azucar',
  //       categoria:'Bienes',
  //       precio:'28$',
  //       descripcion: 'Producto sucraloso ideal para otorgar dulzor a los postres',
  //       cantidad:'10',
  //       presentacion:'1 Kg.'
  const submitData= () => {

    setShowModal(false)
    
  }
  return (
    <>
      <button
        className="mt-64 mr-64 py-2 w-1/5 bg-red-600 rounded-l-lg rounded-r-lg text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonContent}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">{buttonContent}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      ID del producto
                    </label>
                    <input value={ID} onChange={(event) => setID(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => submitData()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};