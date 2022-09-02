import { useSelector } from "react-redux";
import { getCurrentUsers } from "../../redux/selectors/users-selector";
import { CurrentUsersType } from "../../types/types";
import UserElement from "./UserElement";

const CurrentUsers: React.FC = () => {
  const currentUsers = useSelector(getCurrentUsers)
  if (currentUsers.length > 0) {
    return <>
    {currentUsers.map((user: CurrentUsersType) => (
      <UserElement
        key={user.id} {...user}
      />
    ))}
    </>
  } else return <><p>Not found.. Reset filters?</p></>
};

export default CurrentUsers;
