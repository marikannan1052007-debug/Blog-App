import { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import BlogForm from "../components/BlogForm";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function HomePage() {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = usePosts();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const POSTS_PER_PAGE = 9;

  useEffect(() => {
  }, [search]);

  const filteredPosts = data.filter((post) =>
    post.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const startIndex =
    (page - 1) * POSTS_PER_PAGE;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <ErrorMessage
        message={error.message}
      />
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Modern Blogging Platform
          </span>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mt-4">
            Stories & Insights
          </h1>

          

          <button
            onClick={() =>
              setShowForm(true)
            }
            className="
              mt-8
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              transition
            "
          >
            Create New Article
          </button>
        </div>
      </section>

      {/* Create Post Modal */}
      {showForm && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            flex
            items-center
            justify-center
            z-50
            p-4
          "
        >
          <div className="w-full max-w-3xl">
            <BlogForm
              onClose={() =>
                setShowForm(false)
              }
            />
          </div>
        </div>
      )}
       {/* Trending Section */}
      
      {/* Search Section */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div
          className="
            relative
            bg-white
            rounded-2xl
            shadow-lg
            border
            border-gray-200
            overflow-hidden
          "
        >
          <span
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-400
              text-xl
            "
          >
            🔍
          </span>

          <input
            type="text"
            placeholder="Search articles, topics, technologies..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              pl-14
              pr-6
              py-5
              text-lg
              outline-none
            "
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">
          {filteredPosts.length} articles found
        </p>
      </section>

      

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6">
        {currentPosts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold">
              No Articles Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try another search keyword.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              items-stretch
            "
          >
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      <section className="flex justify-center items-center gap-4 py-16">
        <button
          onClick={() =>
            setPage((prev) => prev - 1)
          }
          disabled={page === 1}
          className="
            px-5
            py-3
            bg-white
            border
            rounded-xl
            disabled:opacity-50
          "
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
          disabled={page === totalPages}
          className="
            px-5
            py-3
            bg-white
            border
            rounded-xl
            disabled:opacity-50
          "
        >
          Next
        </button>
      </section>

      
    </div>
  );
}