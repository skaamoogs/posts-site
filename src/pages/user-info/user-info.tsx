import { Card } from "react-bootstrap";
import { IPageProps } from "../../interfaces";
import { mockUser } from "../../const";
import style from "./user-info.module.scss";

export const UserInfo = (props: IPageProps) => {
  const { title } = props;

  const { name, email, company } = mockUser;

  return (
    <>
      {title && <p className="h1">{title}</p>}
      <Card className={`border-0 bg-light bg-gradient ${style.card}`}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{email}</Card.Subtitle>
          <Card.Text>
            <p className="mt-3">
              {`${name} работает в компании ${company.name}`}
            </p>
            <p>Контакты</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
