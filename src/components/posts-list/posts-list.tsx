import { Col, Offcanvas, Row } from "react-bootstrap";
import { Post } from "../post/post";
import { mockComments, mockPosts } from "../../const";
import { Comment } from "../comment/comment";
import { useState } from "react";
import { IPost } from "../../interfaces";

interface IPostListProps {
  posts: IPost[];
  loading?: boolean;
}

export const PostsList = (props: IPostListProps) => {
  const [show, setShow] = useState(false);
  const { posts, loading } = props;

  const showComments = () => {
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
              loading={loading}
            />
          </Col>
        ))}
      </Row>
      <Offcanvas show={show} placement="end" onHide={closeComments}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Комментарии</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {mockComments.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
