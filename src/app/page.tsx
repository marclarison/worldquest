import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-6">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">
        VEXILLUM 🚩
      </h1>

      <p className="text-xl text-slate-600 max-w-2xl mb-8">
        Know the world. One flag at a time.
      </p>

      <div className="flex gap-4">
        <Link
          href="/countries"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Explore Countries
        </Link>

        <button className="border border-slate-300 px-6 py-3 rounded-lg">
          Start Learning
        </button>
      </div>
    </main>
  );
}