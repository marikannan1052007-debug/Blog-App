import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/postsApi";
import { toast } from "react-toastify";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,

    onSuccess: (_, deletedId) => {
      toast.success("Post deleted");

      queryClient.setQueryData(
        ["posts"],
        (oldPosts) =>
          oldPosts?.filter(
            (post) => post.id !== deletedId
          )
      );
    },

    onError: () => {
      toast.error("Delete failed");
    },
  });
};