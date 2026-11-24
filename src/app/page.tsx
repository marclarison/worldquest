export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        WorldQuest 🌍
      </h1>

      <p className="text-lg text-slate-600 max-w-2xl mb-8">
        Master the world, one country at a time.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Start Learning
        </button>

        <button className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100">
          Explore Countries
        </button>
      </div>
    </main>
  );
}