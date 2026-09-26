'use client'
import { Fitcontext } from '@/context/fitcontext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Bookmark } from "lucide-react";

const Savebutton = ({workout}) => {
 const { save, setsave } = useContext(Fitcontext);
 
   const handlefitness = () => {
     const alreadySaved = save.find(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.error("Already saved for later");
      return;
    }

     setsave([...save, workout]);
      toast.success("saved for later");
   };
 
   return (
     <div>
       <button
         className="btn btn-outline btn-secondary text-white px-7 rounded-lg "
         onClick={()=>handlefitness()}
       >
         <Bookmark size={20} />
         Save for later
       </button>
     </div>
   );
};

export default Savebutton;