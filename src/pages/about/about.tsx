import { IPageProps } from "../../interfaces";

export const About = ({ title }: IPageProps) => {
  return <>{title && <p className="h1">{title}</p>}</>;
};
