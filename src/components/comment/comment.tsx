import { Card } from "react-bootstrap";

interface ICommentProps {
  id: number;
  postId?: number;
  name?: string;
  email: string;
  body: string;
}

export const Comment = (props: ICommentProps) => {
  return (
    <Card className="border-0 mt-3">
      <Card.Body className="px-0">
        <Card.Title>{props.email}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
