import styles from "./UserStatus.module.scss";
import React from "react";
class UserStatus extends React.Component {
  state = {
    status: this.props.status,
    editMode: false,
  };
  editModeOn = () => {
    this.setState({ editMode: true });
  };
  editModeOff = () => {
    this.setState({ editMode: false });
  };
  onChange = (e) => {
    this.setState({ status: e.target.value });
  };
  clearStatus = () => {
    this.setState({ status: "" });
  };
  updateStatus = () => {
    this.props.setProfileStatus(this.state.status);
    this.editModeOff();
  };
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.editMode ? (
          <div className={styles.statusEdit}>
            <input
              onChange={this.onChange}
              autoFocus={true}
              value={this.state.status}
            ></input>
            <span onClick={this.updateStatus}>v</span>
            <span onClick={this.editModeOff}>x</span>
          </div>
        ) : (
          <div className={styles.status}>
            <span onClick={this.editModeOn}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}
export default UserStatus;
