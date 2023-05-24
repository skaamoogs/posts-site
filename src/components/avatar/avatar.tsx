import { Image } from "react-bootstrap";
import style from "./avatar.module.scss";

interface IAvatarProps {
  src: string;
  size?: string;
  className?: string;
}

export const Avatar = (props: IAvatarProps) => {
  const className = `flex-shrink-0 rounded-circle ${
    props.size ? "" : "w-100"
  } ${style.img} ${props.className ?? ""}`;

  return (
    <Image
      className={className}
      src={props.src ?? "./avatar-empty.jpeg"}
      alt="avatar"
      width={props.size}
      height={props.size}
    ></Image>
  );
};
