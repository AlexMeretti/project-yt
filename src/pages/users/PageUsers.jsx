import Users from "./components/Users";
import UsersFilters from "./components/UsersFilters";
import styles from "./PageUsers.module.scss";
const PageUsers = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.users}>
          <Users
            isFetching={props.usersPage.isFetching}
            followThunk={props.followThunk}
            unfollowThunk={props.unfollowThunk}
            getCurrentUsers={props.getCurrentUsers}
            isFollowingProcess={props.usersPage.isFollowingProcess}
            currentUsers={props.usersPage.currentUsers}
          />
        </div>
        <div className={styles.filters}>
          <UsersFilters />
        </div>
      </div>
    </>
  );
};

export default PageUsers;
