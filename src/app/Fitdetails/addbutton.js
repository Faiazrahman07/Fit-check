'use client';

import { Fitcontext } from '@/context/fitcontext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CalendarPlus } from "lucide-react";


const Addbutton = ({ workout }) => {
  const { add, setadd } = useContext(Fitcontext);

  const handlefitness = () => {
    setadd([...add, workout]);
    toast.success("added to today's plan");
  };

  return (
    <div>
     <button
  onClick={handlefitness}
  className= "flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2 text-black font-semibold"
>
    <CalendarPlus size={20} />
  Add to today's plan
</button>
    </div>
  );
};

export default Addbutton;