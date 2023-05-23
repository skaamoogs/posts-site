import { Col, Container, Row } from "react-bootstrap";
import { Post } from "../../components/card/post";
import { mockPosts } from "../../const";
import style from "./home.module.scss";

export const Home = () => {
  return (
    <main className={style.main}>
      <Container>
        <Row xs={1} md={1} lg={2} className={`g-3 ${style.row}`}>
          {mockPosts.map((post) => (
            <Col key={post.id}>
              <Post
                title={post.title}
                text={post.body}
                avatarSrc="./avatar.jpg"
                id={post.id}
                size="100px"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};
