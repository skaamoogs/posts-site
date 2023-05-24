import { Button, Card, Col, Image, Row } from "react-bootstrap";
import style from "./post.module.scss";
import { Link } from "react-router-dom";
import { LINKS } from "../../const";

interface IPostProps {
  id: number;
  title: string;
  text: string;
  avatarSrc: string;
  showComments: () => void;
}

export const Post = (props: IPostProps) => {
  return (
    <Card className="border-0 my-3" style={{ minWidth: "340px" }}>
      <Row>
        <Col xs={3}>
          <Link to={`${LINKS.User.path}/${props.id}`}>
            <Image
              className="object-fit-cover flex-shrink-0 rounded-circle m-3 w-100"
              src={props.avatarSrc}
              alt="avatar"
            ></Image>
          </Link>
        </Col>
        <Col xs={9}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Button variant="success" onClick={props.showComments}>
              Комментарии
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
