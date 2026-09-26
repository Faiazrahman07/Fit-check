'use client'
import { Fitcontext } from '@/context/fitcontext';
import React, { useContext } from 'react';

const Savebutton = ({workout}) => {
 const { save, setsave } = useContext(Fitcontext);
 
   const handlefitness = () => {
     setsave([...save, workout]);
   };
 
   return (
     <div>
       <button
         className="rounded-lg bg-lime-400 px-4 py-2 font-semibold text-black"
         onClick={handlefitness}
       >
         Save for later
       </button>
     </div>
   );
};

export default Savebutton;