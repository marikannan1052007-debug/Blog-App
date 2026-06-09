import { Link, useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";

export default function PostDetailPage() {
  const { id } = useParams();

  const {
    data,
    isLoading,
    isError,
    error,
  } = usePost(id);

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        Loading Article...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-20">
        {error.message}
      </div>
    );
  }

  const readTime = Math.max(
    1,
    Math.ceil(
      data.body.split(" ").length / 200
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Back */}
        <Link
          to="/"
          className="
            inline-flex
            items-center
            text-blue-600
            font-medium
            hover:text-blue-800
          "
        >
          ← Back to Articles
        </Link>

        {/* Category */}
        <div className="mt-8">
          <span
            className="
              px-4
              py-2
              rounded-full
              bg-blue-100
              text-blue-600
              text-sm
              font-semibold
            "
          >
            Technology
          </span>
        </div>

        {/* Title */}
        <h1
          className="
            text-5xl
            font-black
            text-slate-900
            mt-6
            leading-tight
          "
        >
          {data.title}
        </h1>

        {/* Author */}
        <div
          className="
            flex
            items-center
            gap-4
            mt-8
          "
        >
          <div
            className="
              w-12
              h-12
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

          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-gray-500">
              {readTime} min read •
              June 2026
            </p>
          </div>
        </div>

        {/* Cover Image */}
        <div className="mt-10">
          <img
            src={`https://picsum.photos/1200/600?random=${data.id}`}
            alt={data.title}
            className="
              w-full
              rounded-3xl
              object-cover
            "
          />
        </div>

        {/* Content */}
        <article
          className="
            mt-12
            bg-white
            rounded-3xl
            p-10
            shadow-sm
          "
        >
          <p
            className="
              text-lg
              text-gray-700
              leading-9
            "
          >
            {data.body}
          </p>

          <p
            className="
              text-lg
              text-gray-700
              leading-9
              mt-6
            "
          >
            {data.body}
          </p>

          <p
            className="
              text-lg
              text-gray-700
              leading-9
              mt-6
            "
          >
            {data.body}
          </p>
        </article>

        {/* Share */}
        <div
          className="
            mt-10
            bg-white
            rounded-3xl
            p-8
          "
        >
          <h3 className="font-bold text-xl">
            Share this article
          </h3>

          <div className="flex gap-4 mt-4">
            <button
              className="
                px-4
                py-2
                border
                rounded-xl
              "
            >
              LinkedIn
            </button>

            <button
              className="
                px-4
                py-2
                border
                rounded-xl
              "
            >
              Twitter
            </button>

            <button
              className="
                px-4
                py-2
                border
                rounded-xl
              "
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Related */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-sm
                "
              >
                <h3 className="font-bold">
                  Related Article {item}
                </h3>

                <p className="text-gray-500 mt-3">
                  Explore more content
                  about modern web
                  development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}