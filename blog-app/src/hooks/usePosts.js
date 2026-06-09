import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/postsApi";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};