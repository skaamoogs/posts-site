import { IPageProps } from "../../interfaces";
import { PostsList } from "../../components/posts-list/posts-list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postsLoadingSelector,
  postsSelector,
} from "../../store/posts/postsSelectors";
import { fetchRequested } from "../../store/posts/postsSlice";

export const Home = ({ title }: IPageProps) => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const loading = useSelector(postsLoadingSelector);

  useEffect(() => {
    const getPosts = async () => {
      dispatch(fetchRequested());
    };
    getPosts();
  }, [dispatch]);

  return (
    <>
      {title && <p className="h1">{title}</p>}
      <PostsList posts={posts} loading={loading} />
    </>
  );
};
