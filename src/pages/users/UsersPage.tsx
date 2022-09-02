import { FC } from "react";
import { Filter } from "./filters/Filter";
import PaginatedUsers from "./PaginatedUsers";
const UsersPage: FC = () => {

  return  <>
    <Filter />
    <PaginatedUsers />
    </>
};


export default UsersPage;
