import { IPageProps } from "../../interfaces";
import { PostsList } from "../../components/posts-list/posts-list";

export const Home = ({ title }: IPageProps) => {
  return (
    <>
      {title && <p className="h1">{title}</p>}
      <PostsList />
    </>
  );
};
