import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Fitcheckcard = ({ Fit }) => {
  return (
        <Link href={`/workout/${Fit.id}`}>
    <div className="bg-[#151820] rounded-xl overflow-hidden border border-[#252a33]">

      
      <figure className="w-full h-44">
        <Image
          src={Fit.image}
          alt={Fit.name}
          width={740}
          height={420}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-4">

        
        <div className="flex flex-wrap gap-2 mb-3">
          {Fit.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-lime-400 text-black px-2 py-1 rounded-full text-[9px] font-bold uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

      
        <h2 className="text-white font-bold text-sm uppercase">
          {Fit.name}
        </h2>

      
        <p className="text-gray-500 text-[10px] mt-1">
          {Fit.equipment}
        </p>

        <div className="border-t border-[#252a33] my-3"></div>

       
        <div className="flex items-center gap-4 text-gray-400 text-[10px]">
          <span>◷ {Fit.duration} min</span>
          <span>🔥 {Fit.caloriesBurned} kcal</span>
          <span>★ {Fit.rating}</span>
        </div>

      </div>
    </div>
     </Link>
  );
 
};


export default Fitcheckcard;