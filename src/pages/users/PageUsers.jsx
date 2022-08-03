import UsersContent from "./components/UsersContent";
import UsersFilters from "./components/UsersFilters";
import styles from "./PageUsers.module.scss";
const PageUsers = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.users}>
        <UsersContent
          pagination={props.usersPage.pagination}
          users={props.usersPage.users}
          isFetching={props.usersPage.isFetching}
          getUsersThunk={props.getUsersThunk}
          usersChangePageThunk={props.usersChangePageThunk}
          followThunk={props.followThunk}
          unfollowThunk={props.unfollowThunk}
          isFollowingProcess={props.usersPage.isFollowingProcess}
        />
      </div>
      <div className={styles.filters}>
        <UsersFilters />
      </div>
    </div>
  );
};

export default PageUsers;
