import { Button, Card, Col, Image, Row } from "react-bootstrap";
import style from "./post.module.scss";

interface IPostProps {
  id: number;
  title: string;
  text: string;
  avatarSrc: string;
  size: string;
}

export const Post = (props: IPostProps) => {
  return (
    <Card className={style.card}>
      <Row>
        <Col md={3}>
          <Image
            className={style.avatar}
            src={props.avatarSrc}
            alt="avatar"
            width={props.size}
            height={props.size}
          ></Image>
        </Col>
        <Col md={9}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Button variant="success">Комментарии</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
