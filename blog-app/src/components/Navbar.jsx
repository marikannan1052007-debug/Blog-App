import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/80
        backdrop-blur-lg
        border-b
        border-gray-200
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            B
          </div>

          <h1
            className="
              text-2xl
              font-bold
              text-slate-900
            "
          >
            BlogSphere
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/"
            className="text-gray-600 hover:text-black"
          >
            Articles
          </Link>

          <Link
            to="/"
            className="text-gray-600 hover:text-black"
          >
            Trending
          </Link>

          <Link
            to="/"
            className="text-gray-600 hover:text-black"
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            className="
              w-10
              h-10
              rounded-xl
              bg-gray-100
            "
          >
            🔔
          </button>

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-slate-900
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            A
          </div>
        </div>
      </div>
    </nav>
  );
}