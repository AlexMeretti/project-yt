import { Field } from "redux-form";
import FormControlsHoc from "../../../../../../components/common/formControls/FormControls";
import { required } from "../../../../../../utils/validators/validator";
import styles from "./UserDataEdit.module.scss";
const input = FormControlsHoc("input");
const textarea = FormControlsHoc("textarea");

const UserDataEdit = ({
  profile,
  handleSubmit,
  profileEditModeToggle,
  error,
}) => {
  return (
    <div className={styles.editForm}>
      <form onSubmit={handleSubmit}>
        <label>Full name:</label>
        <Field
          name="fullName"
          component={input}
          type="text"
          placeholder="full name"
          validate={[required]}
        />
        <label>About me: </label>
        <Field
          name="aboutMe"
          component={input}
          type="text"
          placeholder="about me"
        />
        <label>Looking job:</label>
        <Field name="lookingForAJob" component={input} type="checkbox" />
        <label>Job Description:</label>
        <Field
          name="lookingForAJobDescription"
          component={textarea}
          type="text"
          placeholder="Description"
        />
        <div className={styles.contacts}>
          {Object.entries(profile.contacts).map((el) => {
            return (
              <div key={el}>
                <label>{el[0] + ": "}</label>
                <Field
                  name={"contacts." + el[0]}
                  component={input}
                  type="text"
                  placeholder={el[0]}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.error}>{error}</div>
        <button>Save</button>
        <button onClick={() => profileEditModeToggle(false)}>X</button>
      </form>
      {/* <ul>
        {profile.aboutMe && (
          <li>
            About me:
            <span> {profile.aboutMe}</span>
          </li>
        )}
        <li>
          Looking for a job:
          {profile.lookingForAJob ? <span> yes</span> : <span> no</span>}
        </li>
        {profile.lookingForAJobDescription && (
          <li>
            Job description:
            <span> {profile.lookingForAJobDescription}</span>
          </li>
        )}
      </ul> */}
    </div>
  );
};

export default UserDataEdit;
