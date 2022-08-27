import { FC } from "react";
import { Link } from "react-router-dom";
type PropsTypes = {
  id: number
  link: string
  name: string
}
const ElementMenu: FC<PropsTypes> = ({link, id, name}) => {
  return (
    <li>
      <Link to={link} key={id}>
        {name}
      </Link>
    </li>
  );
};
export default ElementMenu;
