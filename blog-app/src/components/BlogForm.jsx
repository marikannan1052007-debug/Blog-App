import { useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost";

export default function BlogForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] =
    useState("Technology");

  const mutation = useCreatePost();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      title,
      body,
      category,
      userId: 1,
    });

    setTitle("");
    setBody("");

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          ✍️ Create New Article
        </h2>

        <button
          onClick={onClose}
          className="text-gray-500 text-xl"
        >
          ✕
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold">
            Article Title
          </label>

          <input
            type="text"
            placeholder="Enter article title..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full p-4 border rounded-xl"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full p-4 border rounded-xl"
          >
            <option>Technology</option>
            <option>Programming</option>
            <option>React</option>
            <option>JavaScript</option>
            <option>Design</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Content
          </label>

          <textarea
            rows="8"
            placeholder="Write your article..."
            value={body}
            onChange={(e) =>
              setBody(e.target.value)
            }
            className="w-full p-4 border rounded-xl"
            required
          />
        </div>

        <div className="text-sm text-gray-500">
          Words: {
            body
              .trim()
              .split(/\s+/)
              .filter(Boolean).length
          }
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            {mutation.isPending
              ? "Publishing..."
              : "Publish Article"}
          </button>
        </div>
      </form>
    </div>
  );
}