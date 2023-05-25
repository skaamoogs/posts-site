import { IPageProps } from "../../interfaces";
import { mockUser } from "../../const";
import style from "./user-info.module.scss";
import { ListGroup } from "react-bootstrap";
import { PostsList } from "../../components/posts-list/posts-list";

export const UserInfo = (props: IPageProps) => {
  const { title } = props;

  const { name, username, email, company, website, phone } = mockUser;

  return (
    <>
      {title && <p className="h2 my-4">{title}</p>}
      <div className={`rounded p-3 bg-light bg-gradient ${style.card}`}>
        <p className="h4">{username}</p>
        <p className="h6">{name}</p>
        <div className="rounded">
          <p className="mt-3">
            {`${name} работает в компании ${company.name}.`}
          </p>
          <p className="fw-semibold">Контакты:</p>
          <ListGroup>
            <ListGroup.Item>{`email: ${email}`}</ListGroup.Item>
            <ListGroup.Item>{`телефон: ${phone}`}</ListGroup.Item>
            <ListGroup.Item>{`сайт: ${website}`}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <PostsList />
    </>
  );
};
