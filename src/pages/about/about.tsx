import { Card, Col, Row } from "react-bootstrap";
import { IPageProps } from "../../interfaces";

export const About = ({ title }: IPageProps) => {
  return (
    <>
      {title && <p className="h1 my-4">{title}</p>}
      <Card className="border-0">
        <Row>
          <Col xs={6} sm={5} md={4} lg={3}>
            <Card.Img src="./my-avatar.jpg" alt="my avatar"></Card.Img>
          </Col>
          <Col sm={7} md={8} lg={9}>
            <Card.Body className="p-0">
              <Card.Title>
                <span className="h4">Александр Шабанов</span>
              </Card.Title>
              <Card.Subtitle> Начинающий фронтенд-разработчик</Card.Subtitle>
              <Card.Text className="mt-3">
                <p>Мой стек: HTML, SCSS, TypeScript, React, Redux, Docker</p>
                <p>
                  Занимаюсь веб-разработкой более 1 года. В основном применяю
                  React, но также хочу изучить другие фреймворки.
                  <br />
                  Имею навыки делового общения, выстраивал процессы работы с
                  иностранными партнерами. Есть опыт публичных выступлений на
                  научно-технических конференциях.
                  <br /> Увлекаюсь лыжами и бегом.
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};
