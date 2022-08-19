import React, { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import ReactPaginate from "react-paginate";
import UserElement from "./UserElement";
const Users = (props) => {
  return (
    <>
      <div className={styles.usersContent}>
        <div className={styles.fetching}>
          <p>Users</p>
        </div>
        <PaginatedItems
          currentUsers={props.currentUsers}
          getCurrentUsers={props.getCurrentUsers}
          followThunk={props.followThunk}
          unfollowThunk={props.unfollowThunk}
          isFollowingProcess={props.isFollowingProcess}
        />
      </div>
    </>
  );
};
const PaginatedItems = ({
  currentUsers,
  getCurrentUsers,
  followThunk,
  unfollowThunk,
  isFollowingProcess,
}) => {
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 10;
  useEffect(() => {
    getCurrentUsers(page, perPage).then((totalCount) =>
      setPageCount(Math.ceil(totalCount / perPage))
    );
  }, [page, getCurrentUsers]);
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <>
      <CurrentUsers
        currentUsers={currentUsers}
        followThunk={followThunk}
        unfollowThunk={unfollowThunk}
        isFollowingProcess={isFollowingProcess}
      />
      <div className={styles.paginate}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          activeClassName={styles.paginateActive}
          previousClassName={styles.paginateLi}
          nextClassName={styles.paginateLi}
          breakClassName={styles.paginateLi}
          pageClassName={styles.paginateLi}
          disabledClassName={styles.paginateActive}
        />
      </div>
    </>
  );
};
const CurrentUsers = ({
  currentUsers,
  followThunk,
  unfollowThunk,
  isFollowingProcess,
}) => {
  if (currentUsers) {
    return currentUsers.map((user) => (
      <UserElement
        name={user.name}
        followed={user.followed}
        avatar={user.avatar}
        status={user.status}
        key={user.id}
        userId={user.id}
        followThunk={followThunk}
        unfollowThunk={unfollowThunk}
        isFollowingProcess={isFollowingProcess}
      />
    ));
  }
};
export default Users;
