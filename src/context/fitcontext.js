'use client'
import React, { createContext, useState } from 'react';
  export const Fitcontext= createContext(null);
const FitProvider = ({children}) => {
  const[add,setadd]=useState([]);
  const[save,setsave]= useState([]);

  const sharedata={
    add,
    setadd,
    save,
    setsave,
  };
  return (
    <Fitcontext.Provider value={sharedata}>
       {children}
    </Fitcontext.Provider>
  );
};

export default FitProvider;