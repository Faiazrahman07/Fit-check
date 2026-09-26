import React from 'react';
import Fitcheckcard from './Fitcheckcard';

const Fitpromise = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch workout data');
  }

  return res.json();
};

const Fitcheck = async () => {
  const Fitlog = await Fitpromise();

  return (
    <section className="bg-[#0b0d0f] text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

      
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            The Library
          </h1>

          <p className="text-gray-400 mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Fitlog.map((Fit) => (
            <Fitcheckcard
              key={Fit.id}
              Fit={Fit}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fitcheck;