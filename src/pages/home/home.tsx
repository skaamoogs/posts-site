import { Col, Offcanvas, Row } from "react-bootstrap";
import { Post } from "../../components/post/post";
import { mockComments, mockPosts } from "../../const";
import { useState } from "react";
import { Comment } from "../../components/comment/comment";
import { IPageProps } from "../../interfaces";

export const Home = ({ title }: IPageProps) => {
  const [show, setShow] = useState(false);

  const showComments = () => {
    setShow(true);
  };

  const closeComments = () => {
    setShow(false);
  };

  return (
    <>
      {title && <p className="h1">{title}</p>}
      <Row xs={1} lg={2}>
        {mockPosts.map((post) => (
          <Col key={post.id}>
            <Post
              {...post}
              avatarSrc="./avatar.jpg"
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
          {mockComments.map((comment) => {
            return <Comment {...comment} />;
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
