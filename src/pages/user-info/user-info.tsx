import { LINKS } from "../../const";
import style from "./user-info.module.scss";
import {
  Button,
  Container,
  ListGroup,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import { PostsList } from "../../components/posts-list/posts-list";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchUserInfoRequested,
  fetchUserPostsRequested,
} from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  userInfoSelector,
  userLoadingSelector,
  userPostsSelector,
} from "../../store/user/userSelector";

interface IUserCardProps {
  userId: number;
}

export const UserInfo = () => {
  const dispatch = useDispatch();
  const posts = useSelector(userPostsSelector);
  const loading = useSelector(userLoadingSelector);
  const { userId } = useParams();

  useEffect(() => {
    dispatch({
      type: fetchUserPostsRequested.type,
      payload: { userId: Number(userId) },
    });
  }, [dispatch, userId]);

  return (
    <Container className="my-4">
      <main>
        <Link to={LINKS.Root.path}>
          <Button variant="outline-success">Назад</Button>
        </Link>
        <UserCard userId={Number(userId)} />
        {loading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          <PostsList posts={posts} />
        )}
      </main>
    </Container>
  );
};

const UserCard = ({ userId }: IUserCardProps) => {
  const dispatch = useDispatch();
  const user = useSelector(userInfoSelector);
  const loading = useSelector(userLoadingSelector);

  useEffect(() => {
    dispatch({ type: fetchUserInfoRequested.type, payload: { userId } });
  }, [dispatch, userId]);

  if (loading) {
    return (
      <div
        className={`rounded mt-4 p-3 bg-light bg-gradient ${style.placeholder}`}
      >
        <Placeholder as="div" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as="div" animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as="div" animation="glow" className="mt-3">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </div>
    );
  }
  return (
    <div className={`rounded mt-4 p-3 bg-light bg-gradient ${style.card}`}>
      <p className="h4">{user?.username}</p>
      <p className="h6">{user?.name}</p>
      <div className="rounded">
        <p className="mt-3">{`${user?.name} работает в компании ${user?.company.name}.`}</p>
        <p className="fw-semibold">Контакты:</p>
        <ListGroup>
          <ListGroup.Item>{`email: ${user?.email}`}</ListGroup.Item>
          <ListGroup.Item>{`телефон: ${user?.phone}`}</ListGroup.Item>
          <ListGroup.Item>{`сайт: ${user?.website}`}</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
