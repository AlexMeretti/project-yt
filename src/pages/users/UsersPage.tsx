import { FC } from "react";
import PaginatedUsers from "./PaginatedUsers";
const UsersPage: FC = () => {
  return (
    <>
      <div>
          <PaginatedUsers />
      </div>
      <div>Filters</div>
    </>
  );
};


export default UsersPage;
