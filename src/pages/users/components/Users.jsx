import UserElement from "./UserElement";
import styles from "./Users.module.scss";

const Users = (props) => {
  const pagesArray = [];
  for (let i = 1; i <= 10; i++) {
    pagesArray.push(i);
  }

  const createPages = () => {
    return pagesArray.map((page, index) => (
      <span
        key={index}
        onClick={() => props.usersChangePage(page)}
        className={
          props.pagination.usersActivePage === page ? styles.activePage : null
        }
      >
        {page}
      </span>
    ));
  };
  return (
    <>
      <div className={styles.usersContent}>
        <div className={styles.fetching}>
          {props.isFetching ? <p>Loading</p> : <p>Users</p>}
        </div>
        {props.users.map((user) => (
          <UserElement
            name={user.name}
            followed={user.followed}
            avatar={user.avatar}
            status={user.status}
            key={user.id}
            id={user.id}
            followThunk={props.followThunk}
            unfollowThunk={props.unfollowThunk}
            isFollowingProcess={props.isFollowingProcess}
          />
        ))}
      </div>
      <div className={styles.usersPagination}>{createPages()}</div>
    </>
  );
};

export default Users;
