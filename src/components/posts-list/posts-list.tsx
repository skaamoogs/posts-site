import { Col, Offcanvas, Row, Spinner } from "react-bootstrap";
import { Post } from "../post/post";
import { Comment } from "../comment/comment";
import { useState } from "react";
import { IPost } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRequested } from "../../store/comments/commentsSlice";
import { IAction } from "../../store/interfaces";
import { ICommentsPayload } from "../../store/comments/commentsSaga";
import {
  commentsLoadingSelector,
  commentsSelector,
} from "../../store/comments/commentsSelector";

interface IPostListProps {
  posts: IPost[];
}

export const PostsList = (props: IPostListProps) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { posts } = props;
  const comments = useSelector(commentsSelector);
  const loading = useSelector(commentsLoadingSelector);

  const showComments = (postId: number) => {
    dispatch<IAction<ICommentsPayload>>({
      type: fetchCommentsRequested.type,
      payload: { postId },
    });
    setShow(true);
  };

  const closeComments = () => {
    setShow(false);
  };

  return (
    <>
      <Row xs={1} lg={2}>
        {posts.map((post) => (
          <Col key={post.id}>
            <Post
              {...post}
              avatarSrc="/avatar.jpg"
              showComments={showComments}
            />
          </Col>
        ))}
      </Row>
      <Offcanvas show={show} placement="end" onHide={closeComments}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Комментарии</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center h-100">
              <Spinner animation="border" />
            </div>
          ) : (
            comments.map((comment) => {
              return <Comment key={comment.id} {...comment} />;
            })
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
