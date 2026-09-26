const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-white"></div>

        <p className="text-sm text-gray-400">Loading workouts...</p>
      </div>
    </div>
  );
};

export default Loading;