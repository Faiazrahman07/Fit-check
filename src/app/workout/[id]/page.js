import Addbutton from "@/app/Fitdetails/addbutton";
import Savebutton from "@/app/Fitdetails/savebutton";
import Image from "next/image";
import { notFound } from "next/navigation";

const getWorkout = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const workouts = await getWorkout();

  const workout = workouts.find((item) => item.id === Number(id));

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] px-6 py-8 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        <div className="relative h-[800px] w-[550px] overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {workout.name}
          </h1>

          <p className="mt-3 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-sm text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#252a35] bg-[#171b23]">
            <div className="flex items-center justify-between border-b border-[#252a35] px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Equipment
              </span>
              <span className="text-base text-gray-200">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252a35] px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Difficulty
              </span>
              <span className="text-base text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252a35] px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sets
              </span>
              <span className="text-base text-gray-200">
                {workout.sets}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252a35] px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Reps
              </span>
              <span className="text-base text-gray-200">
                {workout.reps}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252a35] px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Duration
              </span>
              <span className="text-base text-gray-200">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252a35] px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Calories
              </span>
              <span className="text-base text-gray-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Rating
              </span>
              <span className="text-base text-gray-200">
                {workout.rating}
              </span>
            </div>
          </div>

          <h2 className="mt-6 text-xl font-bold">
            Instructions
          </h2>

          <ol className="mt-3 space-y-2 text-gray-300">
            {workout.instructions.map((instruction, index) => (
              <li key={instruction}>
                {index + 1}. {instruction}
              </li>
            ))}
          </ol>

          <div className="mt-6 flex gap-3">
            <Addbutton workout={workout} />
            <Savebutton workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}