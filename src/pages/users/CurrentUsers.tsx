import { useSelector } from "react-redux";
import { getCurrentUsers } from "../../redux/selectors/users-selector";
import { CurrentUsersType } from "../../types/types";
import UserElement from "./UserElement";

const CurrentUsers: React.FC = () => {
  const currentUsers = useSelector(getCurrentUsers)
  if (currentUsers) {
    return <>
    {currentUsers.map((user: CurrentUsersType) => (
      <UserElement
        key={user.id} {...user}
      />
    ))}
    </>
  } else return null
};

export default CurrentUsers;
