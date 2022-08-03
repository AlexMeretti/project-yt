import styles from "./AuthTrue.module.scss";
const AuthTrue = (props) => {
  return (
    <div className={styles.profile}>
      <p>{props.login}</p>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default AuthTrue;
