import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          VEXILLUM 🚩
        </Link>

        <div className="flex gap-4">
          <Link href="/">Home</Link>

          <Link href="/countries">
            Countries
          </Link>
        </div>
      </div>
    </nav>
  );
}