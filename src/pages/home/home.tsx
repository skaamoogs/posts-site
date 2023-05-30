import { IPageProps, IPost } from "../../interfaces";
import { PostsList } from "../../components/posts-list/posts-list";
import { ChangeEvent, useEffect, useState } from "react";
import {
  postsLoadingSelector,
  postsSelector,
} from "../../store/posts/postsSelectors";
import { fetchPostsRequested } from "../../store/posts/postsSlice";
import { ButtonGroup, Spinner, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.scss";
import { SortIcon } from "../../icons/sortIcon";
import { PaginationComponent } from "../../components/pagination/paginationComponent";
import { usePaginator } from "../../hooks/usePaginator";

const ITEMS_PER_PAGE = 4;

export const Home = ({ title }: IPageProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortChecked, setSortChecked] = useState(false);

  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  const dispatch = useDispatch();
  const fetchedPosts = useSelector(postsSelector);
  const loading = useSelector(postsLoadingSelector);

  const [page, showPage] = usePaginator();

  useEffect(() => {
    dispatch(fetchPostsRequested());
  }, [dispatch]);

  useEffect(() => {
    if (searchValue) {
      setFilteredPosts(
        fetchedPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(fetchedPosts);
    }
  }, [fetchedPosts, searchValue]);

  useEffect(() => {
    if (sortChecked) {
      setPosts(
        filteredPosts.slice().sort((a, b) => (a.title < b.title ? -1 : 1))
      );
    } else {
      setPosts(filteredPosts);
    }
  }, [filteredPosts, sortChecked]);

  const searchPost = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSortChecked(event.target.checked);
  };

  const pagesNumber = Math.ceil(posts.length / ITEMS_PER_PAGE);

  return (
    <>
      {title && <p className="h1">{title}</p>}
      {loading ? (
        <div className="position-absolute top-50 start-50 translate-middle">
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
            <ButtonGroup>
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="outline-dark"
                checked={sortChecked}
                value="1"
                onChange={checkHandler}
              >
                <SortIcon />
              </ToggleButton>
            </ButtonGroup>
          </div>
          {pagesNumber > 1 && (
            <div className="d-flex justify-content-center">
              <PaginationComponent
                pagesCount={pagesNumber}
                visibleItemsNumber={5}
                pageHandler={showPage}
              />
            </div>
          )}
          <PostsList
            posts={posts.slice(
              (page - 1) * ITEMS_PER_PAGE,
              page * ITEMS_PER_PAGE
            )}
          />
        </>
      )}
    </>
  );
};
