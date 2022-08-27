import { Field } from "redux-form";
import FormControlsHoc from "../../../../../../components/common/formControls/FormControls";
import { ProfileType } from "../../../../../../types/types";
import { required } from "../../../../../../utils/validators/validator";
import { profileActions } from '../../../../../../redux/profile-reducer'
//@ts-ignore
import styles from "./scss/UserDataEdit.module.scss";
import { useDispatch } from "react-redux";
const input = FormControlsHoc("input");
const textarea = FormControlsHoc("textarea");
type propsTypes = {
  profile: ProfileType
  handleSubmit: () => void
  profileEditModeToggle: (toggle: boolean) => void
  error: string
}
const UserDataEdit = ({
  profile,
  handleSubmit,
  error,
}: propsTypes) => {
  const dispatch = useDispatch()
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
              //@ts-ignore
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
        <button onClick={() => dispatch(profileActions.profileEditModeToggle(false))}>X</button>
      </form>
    </div>
  );
};

export default UserDataEdit;
