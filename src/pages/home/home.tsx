import { IPageProps, IPost } from "../../interfaces";
import { PostsList } from "../../components/posts-list/posts-list";
import { useEffect, useState } from "react";
import PostsController from "../../controllers/posts.controller";

export const Home = ({ title }: IPageProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("useEffect");
    const getPosts = async () => {
      const posts = await PostsController.getPosts();
      if (posts) {
        setPosts(posts);
        setLoading(false)
      }
    };
    getPosts();
    console.log("loaded");
  }, []);

  console.log("render");
  console.log(`${posts} имеет длину ${posts.length}`);

  return (
    <>
      {title && <p className="h1">{title}</p>}
      <PostsList posts={posts} loading={loading} />
    </>
  );
};
