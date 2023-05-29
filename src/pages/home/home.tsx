import { IPageProps, IPost } from "../../interfaces";
import { PostsList } from "../../components/posts-list/posts-list";
import { ChangeEvent, useEffect, useState } from "react";
import {
  postsLoadingSelector,
  postsSelector,
} from "../../store/posts/postsSelectors";
import { fetchPostsRequested } from "../../store/posts/postsSlice";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.scss";

const filterPosts = (posts: IPost[], searchValue: string) => {
  if (searchValue) {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  return posts;
};

export const Home = ({ title }: IPageProps) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const loading = useSelector(postsLoadingSelector);

  useEffect(() => {
    dispatch(fetchPostsRequested());
  }, [dispatch]);

  const searchPost = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      {title && <p className="h1">{title}</p>}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center py-3 gap-3">
            <input
              type="search"
              className={`p-1 rounded ${style.search}`}
              placeholder="Поиск"
              value={searchValue}
              onChange={searchPost}
            />
            <button></button>
          </div>
          <PostsList posts={filterPosts(posts, searchValue)} />
        </>
      )}
    </>
  );
};
