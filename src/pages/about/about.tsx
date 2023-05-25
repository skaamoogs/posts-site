import { Col, Image, Row } from "react-bootstrap";
import { IPageProps } from "../../interfaces";

export const About = ({ title }: IPageProps) => {
  return (
    <>
      {title && <p className="h2 my-4">{title}</p>}
      <div>
        <Row>
          <Col xs={6} sm={5} md={4} lg={3}>
            <Image
              src="./my-avatar.jpg"
              alt="my avatar"
              className="w-100 rounded"
            ></Image>
          </Col>
          <Col sm={7} md={8} lg={9}>
            <div className="p-0">
              <p className="mb-1">
                <span className="h4">Александр Шабанов</span>
              </p>
              <p className="h6"> Начинающий фронтенд-разработчик</p>
              <div className="mt-3">
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
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
