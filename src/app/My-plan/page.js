'use client';

import { Fitcontext } from '@/context/fitcontext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const Page = () => {
  const { add, setadd, save, setsave } = useContext(Fitcontext);

  const [activeTab, setActiveTab] = useState('today');
  const [done, setDone] = useState([]);

  const workouts = activeTab === 'today' ? add : save;

  const totalExercises = workouts.length;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned ?? workout.calories ?? 0),
    0
  );

 
  const removeWorkout = (index) => {
    const newList = add.filter((_, i) => i !== index);
    setadd(newList);
  };


  const removeSavedWorkout = (index) => {
    const newList = save.filter((_, i) => i !== index);
    setsave(newList);
  };

  const markDone = (index) => {
    setDone((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-10">

        <div className="mb-6">
          <h1 className="text-3xl font-bold uppercase text-white">
            My Plan
          </h1>

          <p className="text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

  
        <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#151820] md:grid-cols-3">

          <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Exercises</p>

            <h2 className="mt-1 text-3xl font-bold text-lime-400">
              {totalExercises}
            </h2>
          </div>

       
          <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Minutes</p>

            <h2 className="mt-1 text-3xl font-bold text-white">
              {totalMinutes}
            </h2>
          </div>

    
          <div className="p-6">
            <p className="text-xs text-gray-500">Calories</p>

            <h2 className="mt-1 text-3xl font-bold text-white">
              {totalCalories}
            </h2>
          </div>

        </div>

    
        <div className="mb-4 flex items-center justify-between">

          <div className="flex rounded-lg border border-gray-800 bg-[#151820] p-1">

            <button
              onClick={() => setActiveTab('today')}
              className={`rounded-md px-4 py-2 text-sm ${
                activeTab === 'today'
                  ? 'bg-[#20252f] text-white'
                  : 'text-gray-500'
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`rounded-md px-4 py-2 text-sm ${
                activeTab === 'saved'
                  ? 'bg-[#20252f] text-white'
                  : 'text-gray-500'
              }`}
            >
              Saved
            </button>

          </div>

          <select className="rounded-lg border border-gray-800 bg-[#151820] px-3 py-2 text-sm text-gray-400">
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>

        </div>

      
        <div className="space-y-3">

          {workouts.length === 0 ? (

            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#101216]">

              <h2 className="text-lg font-bold uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workout/"
                className="mt-5 rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            workouts.map((workout, index) => (

              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#151820] p-3"
              >

             
                <Image
                  src={workout.image}
                  alt={workout.name}
                  className="h-20 w-28 rounded-lg object-cover"
                width={112}
  height={80}
                />

               
                <div className="flex-1">

                  <h3 className="font-bold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-2 flex gap-4 text-xs text-gray-400">
                    <span>◷ {workout.duration || 0} min</span>

                    <span>
                      🔥 {workout.caloriesBurned ?? workout.calories ?? 0} kcal
                    </span>

                    <span>☆ {workout.rating || 0}</span>
                  </div>

                </div>

            
                <div className="flex items-center gap-2">

                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 hover:bg-gray-800"
                  >
                    View Details
                  </Link>

                  {activeTab === 'today' ? (

                    <>
                      <button
                        onClick={() => markDone(index)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${
                          done.includes(index)
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-lime-400 text-black'
                        }`}
                      >
                        {done.includes(index)
                          ? '✓ Done'
                          : '✓ Mark as Done'}
                      </button>

                      <button
                        onClick={() => removeWorkout(index)}
                        className="px-2 text-xl text-gray-500 hover:text-white"
                      >
                        ×
                      </button>
                    </>

                  ) : (

             
                    <button
                      onClick={() => removeSavedWorkout(index)}
                      className="rounded-full border border-red-900 px-4 py-2 text-xs text-red-400 hover:bg-red-950"
                    >
                        ×
                      
                    </button>

                  )}

                </div>

              </div>

            ))

          )}

        </div>

      </div>
    </div>
  );
};

export default Page;