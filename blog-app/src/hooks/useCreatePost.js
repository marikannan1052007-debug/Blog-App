import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/postsApi";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ["posts"],
        (oldPosts = []) => [
          {
            id: Date.now(),
            ...variables,
          },
          ...oldPosts,
        ]
      );
    },
  });
};