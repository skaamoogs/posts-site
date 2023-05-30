import { Card } from "react-bootstrap";
import { IComment } from "../../interfaces";

export const Comment = (props: IComment) => {
  return (
    <Card className="border-0">
      <Card.Body className="px-0">
        <Card.Title>{props.email}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
