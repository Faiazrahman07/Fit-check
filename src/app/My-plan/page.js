
'use client';

import { Fitcontext } from '@/context/fitcontext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';


const Page = () => {
  const { add, setadd, save, setsave } = useContext(Fitcontext);

  const [sortby, setsortby] = useState('duration');
  const [activeTab, setActiveTab] = useState('today');
  const [done, setDone] = useState([]);

  const workouts = activeTab === 'today' ? add : save;

  
  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortby === 'duration') {
      return a.duration - b.duration;
    }

    if (sortby === 'calories') {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortby === 'rating') {
      return a.rating - b.rating;
    }

    return 0;
  });


  const removeWorkout = (id) => {
    setadd(add.filter((workout) => workout.id !== id));

    setDone((prev) => prev.filter((item) => item !== id));

    toast.success('Removed from today’s plan');
  };

  const removeSavedWorkout = (id) => {
    setsave(save.filter((workout) => workout.id !== id));

    toast.success('Removed from saved');
  };


  const markDone = (id) => {
    if (done.includes(id)) {
      setDone(done.filter((item) => item !== id));
      toast.success('Workout marked as not done');
    } else {
      setDone([...done, id]);
      toast.success('Workout marked as done');
    }
  };

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
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <h2 className="mt-1 text-3xl font-bold text-lime-400">
              {totalExercises}
            </h2>
          </div>

          <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <h2 className="mt-1 text-3xl font-bold text-white">
              {totalMinutes}
            </h2>
          </div>

          <div className="p-6">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <h2 className="mt-1 text-3xl font-bold text-white">
              {totalCalories}
            </h2>
          </div>

        </div>

    
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          
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

          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              Sort By
            </span>

            <select
              value={sortby}
              onChange={(e) => setsortby(e.target.value)}
              className="h-11 rounded-xl border border-[#252a35] bg-[#151820] px-4 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

   
        <div className="space-y-3">

          {sortedWorkouts.length === 0 ? (

       
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#101216]">

              <h2 className="text-lg font-bold uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workout"
                className="mt-5 rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            sortedWorkouts.map((workout) => (

              <div
                key={workout.id}
                className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#151820] p-3 sm:flex-row sm:items-center"
              >

     
                <Image
                  src={workout.image}
                  alt={workout.name}
                  className="h-40 w-full rounded-lg object-cover sm:h-20 sm:w-28"
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

                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-400">

                    <span>
                      ◷ {workout.duration || 0} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned ?? workout.calories ?? 0} kcal
                    </span>

                    <span>
                      ☆ {workout.rating || 0}
                    </span>

                  </div>

                </div>

          
                <div className="flex flex-wrap items-center gap-2">

                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 hover:bg-gray-800"
                  >
                    View Details
                  </Link>

                  {activeTab === 'today' ? (

                    <>
                      <button
                        onClick={() => markDone(workout.id)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${
                          done.includes(workout.id)
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-lime-400 text-black'
                        }`}
                      >
                        {done.includes(workout.id)
                          ? '✓ Done'
                          : '✓ Mark as Done'}
                      </button>

                      <button
                        onClick={() => removeWorkout(workout.id)}
                        className="px-2 text-xl text-gray-500 hover:text-red-400"
                      >
                        ×
                      </button>
                    </>

                  ) : (

                    <button
                      onClick={() => removeSavedWorkout(workout.id)}
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
