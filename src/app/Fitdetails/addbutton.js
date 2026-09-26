'use client';

import { Fitcontext } from '@/context/fitcontext';
import React, { useContext } from 'react';


const Addbutton = ({ workout }) => {
  const { add, setadd } = useContext(Fitcontext);

  const handlefitness = () => {
    setadd([...add, workout]);
  };

  return (
    <div>
      <button
        className="rounded-lg bg-lime-400 px-4 py-2 font-semibold text-black"
        onClick={handlefitness}
      >
        Add to today's plan
      </button>
    </div>
  );
};

export default Addbutton;