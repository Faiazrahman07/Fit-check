import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>

        <p className="mt-4 text-xl font-semibold text-white">
          Workout Not Found
        </p>

        <p className="mt-2 text-sm text-gray-400">
          The workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;