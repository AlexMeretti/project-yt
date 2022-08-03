import React from "react";
import Users from "./Users";

class UsersContent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(
      this.props.pagination.usersActivePage,
      this.props.pagination.usersPerPage
    );
  }
  usersChangePage = (page) => {
    this.props.usersChangePageThunk(page, this.props.pagination.usersPerPage);
  };
  render() {
    return (
      <Users
        isFetching={this.props.isFetching}
        usersChangePage={this.usersChangePage}
        users={this.props.users}
        pagination={this.props.pagination}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
        isFollowingProcess={this.props.isFollowingProcess}
      />
    );
  }
}

export default UsersContent;
