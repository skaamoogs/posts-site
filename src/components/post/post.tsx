import { Button, Card, Col, Placeholder, Row } from "react-bootstrap";
import style from "./post.module.scss";
import { Link } from "react-router-dom";
import { LINKS } from "../../const";
import { Avatar } from "../avatar/avatar";
import { IPost } from "../../interfaces";

interface IPostProps extends IPost {
  avatarSrc: string;
  loading?: boolean;
  showComments: () => void;
}

export const Post = (props: IPostProps) => {
  return (
    <Card className={`border-0 my-3`}>
      <Row>
        <Col xs={4} sm={3}>
          <Link to={`${LINKS.User.path}/${props.userId}`}>
            <Avatar src={props.avatarSrc} className="m-3" />
          </Link>
        </Col>
        <Col xs={12} sm={9}>
          <CardBody {...props} />
        </Col>
      </Row>
    </Card>
  );
};

const CardBody = (props: IPostProps) => {
  if (props.loading) {
    return (
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="outline-success" xs={6} />
      </Card.Body>
    );
  }
  return (
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.body}</Card.Text>
      <Button variant="outline-success" onClick={props.showComments}>
        Комментарии
      </Button>
    </Card.Body>
  );
};
