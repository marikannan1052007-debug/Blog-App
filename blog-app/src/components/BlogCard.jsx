import { Link } from "react-router-dom";
import { useDeletePost } from "../hooks/useDeletePost";

export default function BlogCard({ post }) {
  const deleteMutation = useDeletePost();

  const readTime = Math.max(
    1,
    Math.ceil(post.body.split(" ").length / 200)
  );

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (confirmed) {
      deleteMutation.mutate(post.id);
    }
  };

  return (
    <article
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        border
        border-gray-200
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
        h-full
      "
    >
      {/* Article Image */}
      <img
        src={`https://picsum.photos/600/400?random=${post.id}`}
        alt={post.title}
        className="
          w-full
          h-56
          object-cover
        "
      />

      <div className="p-6 flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          

          <span className="text-sm text-gray-400">
            {readTime} min read
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            text-2xl
            font-bold
            text-gray-900
            mb-4
            line-clamp-2
          "
        >
          {post.title}
        </h2>

        {/* Body */}
        <div className="flex-grow">
          <p
            className="
              text-gray-600
              leading-7
              line-clamp-4
            "
          >
            {post.body}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            justify-between
            items-center
            pt-5
            mt-6
            border-t
            border-gray-100
          "
        >
          <Link
            to={`/posts/${post.id}`}
            className="
              font-semibold
              text-blue-600
              hover:text-blue-800
            "
          >
            Read Article →
          </Link>

          <button
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
            className="
              px-3
              py-2
              rounded-lg
              text-red-500
              hover:bg-red-50
              transition
            "
          >
            {deleteMutation.isPending
              ? "Deleting..."
              : "Delete"}
          </button>
        </div>
      </div>
    </article>
  );
}