import { IPageProps, IUserInfo } from "../../interfaces";
import { LINKS, mockUser } from "../../const";
import style from "./user-info.module.scss";
import {
  Button,
  Col,
  Container,
  ListGroup,
  Placeholder,
  Row,
} from "react-bootstrap";
import { PostsList } from "../../components/posts-list/posts-list";
import { Link } from "react-router-dom";

interface IUserInfoProps {
  loading?: boolean;
}

export const UserInfo = (props: IUserInfoProps) => {
  return (
    <Container className="my-4">
      <main>
        <Link to={LINKS.Root.path}>
          <Button variant="outline-success">Назад</Button>
        </Link>
        <UserCard {...props} />
        <PostsList />
      </main>
    </Container>
  );
};

const UserCard = ({ loading }: IUserInfoProps) => {
  const { name, username, email, company, website, phone } = mockUser;

  if (loading) {
    return (
      <div className={`rounded mt-4 p-3 bg-light bg-gradient ${style.placeholder}`}>
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
      <p className="h4">{username}</p>
      <p className="h6">{name}</p>
      <div className="rounded">
        <p className="mt-3">{`${name} работает в компании ${company.name}.`}</p>
        <p className="fw-semibold">Контакты:</p>
        <ListGroup>
          <ListGroup.Item>{`email: ${email}`}</ListGroup.Item>
          <ListGroup.Item>{`телефон: ${phone}`}</ListGroup.Item>
          <ListGroup.Item>{`сайт: ${website}`}</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
